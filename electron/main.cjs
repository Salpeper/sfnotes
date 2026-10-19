const { app, BrowserWindow, ipcMain, clipboard, nativeImage, screen, globalShortcut, desktopCapturer, dialog } = require('electron');
const path = require('node:path');
const fs = require('node:fs');

let win;
let autoUpdater;
let registeredShortcuts = [];
function getAutoUpdater() {
  if (autoUpdater) return autoUpdater;
  ({ autoUpdater } = require('electron-updater'));
  autoUpdater.autoDownload = true;
  autoUpdater.autoInstallOnAppQuit = true;
  autoUpdater.on('checking-for-update', () => sendUpdateStatus('checking'));
  autoUpdater.on('update-available', (info) => sendUpdateStatus('available', { version: info.version }));
  autoUpdater.on('update-not-available', () => sendUpdateStatus('not-available'));
  autoUpdater.on('download-progress', (progress) => sendUpdateStatus('downloading', { percent: Math.round(progress.percent) }));
  autoUpdater.on('update-downloaded', (info) => sendUpdateStatus('downloaded', { version: info.version }));
  autoUpdater.on('error', (error) => {
    console.error('No se pudo actualizar SFNotes:', error);
    sendUpdateStatus('error');
  });
  return autoUpdater;
}
function createWindow() {
  const bounds = screen.getPrimaryDisplay().workArea;
  win = new BrowserWindow({
    width: 430, height: 680, x: bounds.x + bounds.width - 460, y: bounds.y + 42,
    minWidth: 260, minHeight: 280, title: 'SFNotes', frame: false, transparent: true,
    alwaysOnTop: true, skipTaskbar: false, resizable: true, backgroundColor: '#00000000',
    icon: path.join(__dirname, '../build/icon.png'),
    webPreferences: { preload: path.join(__dirname, 'preload.cjs'), contextIsolation: true, nodeIntegration: false }
  });
  win.webContents.on('did-fail-load', (_event, code, description, url) => {
    console.error(`No se pudo cargar SFNotes (${code}): ${description} — ${url}`);
  });
  win.webContents.on('console-message', (event) => {
    if (event.level >= 2) console.error(`SFNotes renderer: ${event.message}`);
  });
  win.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true });
  win.setAlwaysOnTop(true, 'floating');
  if (process.env.VITE_DEV_SERVER_URL) win.loadURL(process.env.VITE_DEV_SERVER_URL);
  else win.loadFile(path.join(__dirname, '../dist/index.html'));
}
ipcMain.handle('clipboard:read', async () => {
  const entries = await clipboard.read();
  const entry = entries[0];
  if (!entry) return null;
  const types = entry.types;
  const imageType = types.find((type) => /^image\/(png|jpeg|webp)$/i.test(type));
  if (imageType) {
    const blob = await entry.getType(imageType);
    const image = nativeImage.createFromBuffer(Buffer.from(await blob.arrayBuffer()));
    return image.isEmpty() ? null : { kind: 'image', value: image.toDataURL() };
  }
  const bookmark = 'electron application/bookmark';
  if (types.includes(bookmark)) {
    const link = await entry.getType(bookmark);
    if (link.url) return { kind: 'url', value: link.url, title: link.title };
  }
  const fileListType = types.find((type) => /osclipboard;format="CF_HDROP"/i.test(type));
  if (fileListType) {
    const blob = await entry.getType(fileListType);
    const bytes = Buffer.from(await blob.arrayBuffer());
    if (bytes.length >= 20) {
      const offset = bytes.readUInt32LE(0);
      const wide = bytes.readUInt32LE(16) !== 0;
      const payload = bytes.subarray(offset);
      const decoded = wide ? payload.toString('utf16le') : payload.toString('latin1');
      const paths = decoded.split('\0').filter(Boolean);
      if (paths.length) return { kind: 'files', value: paths };
    }
  }
  const uriType = types.find((type) => type.toLowerCase() === 'text/uri-list');
  if (uriType) {
    const blob = await entry.getType(uriType);
    const uris = (await blob.text()).split(/\r?\n/).map((line) => line.trim()).filter((line) => line && !line.startsWith('#'));
    const localFiles = uris.filter((uri) => uri.startsWith('file://')).map((uri) => {
      try { return require('node:url').fileURLToPath(uri); } catch { return null; }
    }).filter(Boolean);
    if (localFiles.length) return { kind: 'files', value: localFiles };
    const link = uris.find((uri) => /^https?:\/\//i.test(uri));
    if (link) return { kind: 'url', value: link };
  }
  const htmlType = types.find((type) => type.toLowerCase() === 'text/html');
  if (htmlType) {
    const blob = await entry.getType(htmlType);
    const html = await blob.text();
    const link = html.match(/<a\b[^>]*href\s*=\s*["']([^"']+)["']/i)?.[1];
    if (link && /^https?:\/\//i.test(link)) return { kind: 'url', value: link };
  }
  const textType = types.find((type) => type.toLowerCase() === 'text/plain');
  if (textType) {
    const blob = await entry.getType(textType);
    const text = (await blob.text()).trim();
    if (text) return { kind: /^https?:\/\//i.test(text) || /^www\./i.test(text) ? 'url' : 'text', value: text };
  }
  return null;
});
ipcMain.handle('clipboard:write', async (_event, item) => {
  if (item.kind === 'image') {
    const blob = new Blob([nativeImage.createFromDataURL(item.value).toPNG()], { type: 'image/png' });
    await clipboard.write([new (require('electron').ClipboardItem)({ 'image/png': blob })]);
    return;
  }
  if (item.kind === 'file' && process.platform === 'win32') {
    const paths = [item.value];
    const header = Buffer.alloc(20);
    header.writeUInt32LE(20, 0);
    header.writeUInt32LE(1, 16);
    const names = Buffer.from(`${paths.join('\0')}\0\0`, 'utf16le');
    const blob = new Blob([Buffer.concat([header, names])], { type: 'application/octet-stream' });
    await clipboard.write([new (require('electron').ClipboardItem)({
      'electron application/osclipboard;format="CF_HDROP"': blob,
      'text/uri-list': paths.map((file) => require('node:url').pathToFileURL(file).href).join('\r\n')
    })]);
    return;
  }
  if (item.kind === 'file') {
    await clipboard.write([new (require('electron').ClipboardItem)({ 'text/uri-list': require('node:url').pathToFileURL(item.value).href })]);
    return;
  }
  await clipboard.writeText(item.value);
});
ipcMain.handle('files:choose', async () => {
  const result = await dialog.showOpenDialog(win, { properties: ['openFile', 'multiSelections'] });
  return result.canceled ? [] : result.filePaths;
});
const dataFile = () => path.join(app.getPath('userData'), 'snippets.json');
ipcMain.handle('data:read', () => {
  try {
    const data = JSON.parse(fs.readFileSync(dataFile(), 'utf8'));
    return Array.isArray(data) ? data : null;
  } catch (error) {
    if (error.code !== 'ENOENT') console.error('No se pudieron leer los fragmentos:', error);
    return null;
  }
});
ipcMain.handle('data:write', (_event, items) => {
  if (!Array.isArray(items)) return false;
  const target = dataFile();
  const temporary = `${target}.tmp`;
  try {
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(temporary, JSON.stringify(items), 'utf8');
    fs.renameSync(temporary, target);
    return true;
  } catch (error) {
    console.error('No se pudieron guardar los fragmentos:', error);
    try { fs.rmSync(temporary, { force: true }); } catch {}
    return false;
  }
});
ipcMain.on('window:pin', (_event, pinned) => {
  if (!win) return;
  win.setAlwaysOnTop(pinned, pinned ? 'floating' : 'normal');
  win.setVisibleOnAllWorkspaces(pinned, { visibleOnFullScreen: true });
});
ipcMain.handle('shortcuts:set', (_event, shortcuts) => {
  globalShortcut.unregisterAll();
  registeredShortcuts = [];
  const actions = { paste: shortcuts?.globalPaste, screenshot: shortcuts?.screenshot };
  const results = {};
  for (const [action, accelerator] of Object.entries(actions)) {
    if (!accelerator) continue;
    try {
      const registered = globalShortcut.register(accelerator, () => {
        if (win && !win.isDestroyed()) win.webContents.send('shortcuts:action', action);
      });
      results[action] = registered;
      if (registered) registeredShortcuts.push(accelerator);
    } catch (error) {
      console.error(`No se pudo registrar el atajo ${accelerator}:`, error);
      results[action] = false;
    }
  }
  return results;
});
ipcMain.handle('screen:capture', async () => {
  const wasVisible = win && win.isVisible();
  if (wasVisible) win.hide();
  try {
    await new Promise((resolve) => setTimeout(resolve, 180));
    const sources = await desktopCapturer.getSources({
      types: ['screen'],
      thumbnailSize: { width: 1920, height: 1080 },
      fetchWindowIcons: false
    });
    const display = screen.getPrimaryDisplay();
    const source = sources.find((entry) => entry.display_id === String(display.id)) || sources[0];
    if (!source || source.thumbnail.isEmpty()) throw new Error('El sistema no permitió capturar la pantalla.');
    return source.thumbnail.toDataURL();
  } finally {
    if (wasVisible && win && !win.isDestroyed()) win.show();
  }
});
const sendUpdateStatus = (status, details = {}) => {
  if (win && !win.isDestroyed()) win.webContents.send('updates:status', { status, ...details });
};
ipcMain.handle('updates:check', async () => {
  if (!app.isPackaged) return { status: 'unsupported' };
  try {
    await getAutoUpdater().checkForUpdates();
    return { status: 'checking' };
  } catch (error) {
    console.error('No se pudo comprobar si hay actualizaciones:', error);
    return { status: 'error' };
  }
});
ipcMain.on('updates:install', () => autoUpdater?.quitAndInstall());
app.whenReady().then(() => {
  createWindow();
  if (app.isPackaged) {
    setTimeout(() => {
      try {
        getAutoUpdater().checkForUpdates().catch((error) => {
          console.error('No se pudo comprobar si hay actualizaciones:', error);
          sendUpdateStatus('error');
        });
      } catch (error) {
        console.error('No se pudo iniciar el actualizador:', error);
        sendUpdateStatus('error');
      }
    }, 5000);
  }
});
app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
app.on('will-quit', () => { globalShortcut.unregisterAll(); registeredShortcuts = []; });
