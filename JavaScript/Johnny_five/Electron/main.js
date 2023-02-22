const { app, BrowserWindow } = require('electron')
const five = require('johnny-five')
const board = new five.Board()

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  board.on('ready', () => {
    const led = new five.Led(13)

    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
      }
    })

    app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') {
        app.quit()
      }
    })

    app.on('web-contents-created', (event, contents) => {
      contents.on('did-finish-load', () => {
        contents.send('led-status', led.isOn)
      })
    })

    app.on('ipcMain', (event, arg) => {
      if (arg === 'toggle-led') {
        led.toggle()
        app.webContents.send('led-status', led.isOn)
      }
    })
  })
})