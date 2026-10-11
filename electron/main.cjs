const { app, BrowserWindow, ipcMain, clipboard, nativeImage, screen } = require('electron');
const path = require('node:path');
const fs = require('node:fs');

let win;
function createWindow() {
  const bounds = screen.getPrimaryDisplay().workArea;
  win = new BrowserWindow({
    width: 390, height: 590, x: bounds.x + bounds.width - 420, y: bounds.y + 42,
    minWidth: 320, minHeight: 300, title: 'SFNotes', frame: false, transparent: true,
    alwaysOnTop: true, skipTaskbar: false, resizable: true, backgroundColor: '#00000000',
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
ipcMain.handle('clipboard:read', () => {
  const image = clipboard.readImage();
  if (!image.isEmpty()) return { kind: 'image', value: image.toDataURL() };
  const text = clipboard.readText();
  return text ? { kind: 'text', value: text } : null;
});
ipcMain.handle('clipboard:write', (_event, item) => {
  if (item.kind === 'image') clipboard.writeImage(nativeImage.createFromDataURL(item.value));
  else clipboard.writeText(item.value);
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
app.whenReady().then(createWindow);
app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
