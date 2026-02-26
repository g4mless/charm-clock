const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    width: 300,
    height: 100,
    resizable: false,
    transparent: true,
    frame: false,
    hasShadow: false,
    skipTaskbar: true,
    webPreferences: {
      contextIsolation: true
    }
  })

  win.loadFile('index.html')
}

app.on('ready', () => {
    createWindow()
    Menu.setApplicationMenu(null)
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})