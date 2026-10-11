const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('sfnotes', {
  readClipboard: () => ipcRenderer.invoke('clipboard:read'),
  writeClipboard: (item) => ipcRenderer.invoke('clipboard:write', item),
  readItems: () => ipcRenderer.invoke('data:read'),
  saveItems: (items) => ipcRenderer.invoke('data:write', items),
  setPinned: (value) => ipcRenderer.send('window:pin', value),
  platform: process.platform,
  close: () => window.close()
});
