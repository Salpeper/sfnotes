import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = process.cwd();
const docs = resolve(root, 'docs');
const source = await readFile(resolve(docs, 'site.js'), 'utf8');

function extractObject(declaration, nextMarker) {
  const start = source.indexOf(`const ${declaration} = `);
  if (start < 0) throw new Error(`Missing ${declaration}`);
  const valueStart = source.indexOf('{', start);
  const endMarker = source.indexOf(nextMarker, valueStart);
  let depth = 0;
  let quote = null;
  let escaped = false;
  for (let i = valueStart; i < endMarker; i += 1) {
    const char = source[i];
    if (quote) {
      if (escaped) escaped = false;
      else if (char === '\\') escaped = true;
      else if (char === quote) quote = null;
      continue;
    }
    if (char === "'" || char === '"' || char === '`') quote = char;
    else if (char === '{') depth += 1;
    else if (char === '}' && --depth === 0) {
      return Function(`"use strict"; return (${source.slice(valueStart, i + 1)});`)();
    }
  }
  throw new Error(`Could not parse ${declaration}`);
}

const translations = extractObject('translations', '\n\nconst showcaseTranslations');
const showcase = extractObject('showcaseTranslations', '\nfor (const language');
for (const language of Object.keys(showcase)) Object.assign(translations[language], showcase[language]);
const languages = Object.keys(translations);
const baseUrl = 'https://salpeper.github.io/sfnotes/';
const template = await readFile(resolve(root, 'website/index.template.html'), 'utf8');

function escapeAttribute(value) {
  return String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
}

function makePage(language) {
  const copy = translations[language];
  const prefix = language === 'es' ? '' : '../';
  let page = template.replace('<html lang="es">', `<html lang="${language}">`);
  page = page.replaceAll(/(href|src)="(images\/|styles\.css|site\.js)/g, `$1="${prefix}$2`);
  page = page.replace(/<title>[^<]*<\/title>/, `<title>${escapeAttribute(copy.pageTitle)}</title>`);
  page = page.replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${escapeAttribute(copy.pageDescription)}" />`);
  page = page.replace(/<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${escapeAttribute(copy.pageTitle)}" />`);
  page = page.replace(/<meta property="og:description" content="[^"]*"\s*\/>/, `<meta property="og:description" content="${escapeAttribute(copy.ogDescription)}" />`);
  page = page.replace(/<meta property="og:image" content="[^"]*"\s*\/>/, `<meta property="og:image" content="${baseUrl}images/notes-main.png" />`);
  const path = language === 'es' ? '' : `${language}/`;
  const alternates = languages.map((item) => `<link rel="alternate" hreflang="${item}" href="${baseUrl}${item === 'es' ? '' : `${item}/`}" />`).join('\n    ');
  const canonical = `<link rel="canonical" href="${baseUrl}${path}" />`;
  const jsonld = `<script type="application/ld+json">${JSON.stringify({
    '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: 'SFNotes', description: copy.pageDescription,
    applicationCategory: 'UtilitiesApplication', operatingSystem: 'Windows 10 or later, macOS, Linux', url: `${baseUrl}${path}`,
    downloadUrl: 'https://github.com/Salpeper/sfnotes/releases/latest', image: `${baseUrl}images/notes-main.png`,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, author: { '@type': 'Person', name: 'Salpeper' }
  })}</script>`;
  page = page.replace('    <title>', `    ${canonical}\n    ${alternates}\n    <link rel="alternate" hreflang="x-default" href="${baseUrl}" />\n    <meta property="og:type" content="website" />\n    <meta property="og:url" content="${baseUrl}${path}" />\n    ${jsonld}\n    <title>`);
  const replacements = [];
  const stack = [];
  const tokens = /<!--[^]*?-->|<![^>]*>|<\/?[a-zA-Z][^>]*>/g;
  for (const match of page.matchAll(tokens)) {
    const token = match[0];
    if (/^<\//.test(token)) {
      const tag = token.match(/^<\/([\w-]+)/)?.[1]?.toLowerCase();
      for (let i = stack.length - 1; i >= 0; i -= 1) {
        if (stack[i].tag !== tag) continue;
        const opened = stack.splice(i, 1)[0];
        if (opened.key in copy) replacements.push([opened.contentStart, match.index, copy[opened.key]]);
        break;
      }
      continue;
    }
    const tag = token.match(/^<([\w-]+)/)?.[1]?.toLowerCase();
    if (!tag) continue;
    const attrs = Object.fromEntries([...token.matchAll(/([\w-]+)="([^"]*)"/g)].map((item) => [item[1], item[2]]));
    if (attrs['data-i18n-aria'] in copy) {
      const value = escapeAttribute(copy[attrs['data-i18n-aria']]);
      const next = token.replace(/aria-label="[^"]*"/, `aria-label="${value}"`);
      replacements.push([match.index, match.index + token.length, next]);
    }
    if (attrs['data-i18n-alt'] in copy) {
      const value = escapeAttribute(copy[attrs['data-i18n-alt']]);
      const current = replacements.find((item) => item[0] === match.index);
      const original = current ? current[2] : token;
      const next = original.replace(/alt="[^"]*"/, `alt="${value}"`);
      if (current) current[2] = next;
      else replacements.push([match.index, match.index + token.length, next]);
    }
    if (attrs['data-i18n'] && !/\/>$/.test(token)) stack.push({ tag, key: attrs['data-i18n'], contentStart: match.index + token.length });
  }
  for (const [start, end, replacement] of replacements.sort((a, b) => b[0] - a[0])) page = page.slice(0, start) + replacement + page.slice(end);
  return page;
}

for (const language of languages) {
  const dir = resolve(docs, language === 'es' ? '.' : language);
  await mkdir(dir, { recursive: true });
  await writeFile(resolve(dir, 'index.html'), makePage(language));
}

const urls = languages.map((language) => {
  const path = language === 'es' ? '' : `${language}/`;
  const alternates = languages.map((item) => `<xhtml:link rel="alternate" hreflang="${item}" href="${baseUrl}${item === 'es' ? '' : `${item}/`}" />`).join('');
  return `<url><loc>${baseUrl}${path}</loc>${alternates}<xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}" /></url>`;
}).join('\n  ');
await writeFile(resolve(docs, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n  ${urls}\n</urlset>\n`);
await writeFile(resolve(docs, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${baseUrl}sitemap.xml\n`);
