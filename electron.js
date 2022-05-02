const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url')

const createWindow = ()=>{
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadURL(
    url.format({
      pathname: path.join(__dirname, `/www/index.html`),
      protocol: 'file',
      slashes: true
    })
  )
  win.webContents.openDevTools();
}

app.whenReady().then(()=>{
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', ()=>{
  if(process.platform !== 'darwin') app.quit()
})
