const owner = 'Salpeper';
const repository = 'sfnotes';
const latestReleasePage = `https://github.com/${owner}/${repository}/releases/latest`;
const fallbackVersion = '1.0.0';

document.querySelector('#year').textContent = new Date().getFullYear();

function detectPlatform() {
  const platform = `${navigator.userAgent} ${navigator.platform}`.toLowerCase();
  if (platform.includes('win')) return 'windows';
  if (platform.includes('mac')) return 'macos';
  if (platform.includes('linux')) return 'linux';
  return null;
}

function findAsset(assets, platform) {
  if (platform === 'windows') return assets.find((asset) => /SFNotes-Setup-.*\.exe$/i.test(asset.name));
  if (platform === 'macos') return assets.find((asset) => /universal\.dmg$/i.test(asset.name)) || assets.find((asset) => /universal-mac\.zip$/i.test(asset.name));
  if (platform === 'linux') return assets.find((asset) => /x86_64\.AppImage$/i.test(asset.name)) || assets.find((asset) => /amd64\.deb$/i.test(asset.name));
  return null;
}

function applyRelease(release) {
  const assets = release.assets || [];
  const version = (release.tag_name || '').replace(/^v/, '') || fallbackVersion;
  document.querySelector('#release-note span').textContent = version;

  for (const platform of ['windows', 'macos', 'linux']) {
    const asset = findAsset(assets, platform);
    const link = document.querySelector(`[data-asset="${platform}"]`);
    if (asset && link) link.href = asset.browser_download_url;
  }

  const currentPlatform = detectPlatform();
  const heroLink = document.querySelector('#hero-download');
  const heroLabel = document.querySelector('#hero-download-label');
  const heroDetail = document.querySelector('#hero-download-detail');
  const platformAsset = currentPlatform && findAsset(assets, currentPlatform);
  if (platformAsset) {
    heroLink.href = platformAsset.browser_download_url;
    heroLabel.textContent = `Descargar para ${currentPlatform === 'macos' ? 'macOS' : currentPlatform === 'linux' ? 'Linux' : 'Windows'}`;
    heroDetail.textContent = `Versión ${version} · Descarga gratuita`;
    document.querySelector(`[data-platform="${currentPlatform}"]`)?.classList.add('suggested');
  } else {
    heroLink.href = release.html_url || latestReleasePage;
    heroLabel.textContent = `Descargar SFNotes ${version}`;
    heroDetail.textContent = 'Gratis para Windows, macOS y Linux';
  }
}

fetch(`https://api.github.com/repos/${owner}/${repository}/releases/latest`, { headers: { Accept: 'application/vnd.github+json' } })
  .then((response) => {
    if (!response.ok) throw new Error('No se pudo consultar la versión');
    return response.json();
  })
  .then(applyRelease)
  .catch(() => {
    document.querySelector('#hero-download').href = latestReleasePage;
    for (const link of document.querySelectorAll('[data-asset]')) link.href = latestReleasePage;
  });
