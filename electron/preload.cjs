const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('sfnotes', {
  readClipboard: () => ipcRenderer.invoke('clipboard:read'),
  writeClipboard: (item) => ipcRenderer.invoke('clipboard:write', item),
  chooseFiles: () => ipcRenderer.invoke('files:choose'),
  readItems: () => ipcRenderer.invoke('data:read'),
  saveItems: (items) => ipcRenderer.invoke('data:write', items),
  setShortcuts: (shortcuts) => ipcRenderer.invoke('shortcuts:set', shortcuts),
  captureScreen: () => ipcRenderer.invoke('screen:capture'),
  onShortcutAction: (callback) => {
    const listener = (_event, action) => callback(action);
    ipcRenderer.on('shortcuts:action', listener);
    return () => ipcRenderer.removeListener('shortcuts:action', listener);
  },
  setPinned: (value) => ipcRenderer.send('window:pin', value),
  checkForUpdates: () => ipcRenderer.invoke('updates:check'),
  installUpdate: () => ipcRenderer.send('updates:install'),
  onUpdateStatus: (callback) => {
    const listener = (_event, status) => callback(status);
    ipcRenderer.on('updates:status', listener);
    return () => ipcRenderer.removeListener('updates:status', listener);
  },
  platform: process.platform,
  close: () => window.close()
});
