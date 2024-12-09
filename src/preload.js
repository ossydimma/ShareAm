const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('darkMode', {
  toggle: () => ipcRenderer.invoke('dark-mode:toggle'),
  system: () => ipcRenderer.invoke('dark-mode:system')
});
contextBridge.exposeInMainWorld('electronAPI', {
  minimizeWindow: () => ipcRenderer.invoke('minimize-window'),
  maximizeWindow: () => ipcRenderer.invoke('maximize-window'),
  closeWindow: () => ipcRenderer.invoke('close-window')
});

contextBridge.exposeInMainWorld('showState', {
  toggle: () => {
    const currentValue = localStorage.getItem('showValue') === 'true';
    const newValue = !currentValue;
    localStorage.setItem('showValue', newValue);
    ipcRenderer.invoke('show-value:toggle', newValue);
    return newValue;
  },
  getState: () => localStorage.getItem('showValue') === 'true',
  setState: (value) => localStorage.setItem('showValue', value)
});

contextBridge.exposeInMainWorld('shareScreen', {
  getSources: async () => {
      return await ipcRenderer.invoke('get-sources');
  }
});



// A SAMPLE ON HOW TO STORE INFORMATION IN LOCAL STORAGE

// contextBridge.exposeInMainWorld('electron', {
//   localStorage: {
//     setItem: (key, value) => localStorage.setItem(key, value),
//     getItem: (key) => localStorage.getItem(key),
//     removeItem: (key) => localStorage.removeItem(key)
//   },
//   sessionStorage: {
//     setItem: (key, value) => sessionStorage.setItem(key, value),
//     getItem: (key) => sessionStorage.getItem(key),
//     removeItem: (key) => sessionStorage.removeItem(key)
//   }
// });

