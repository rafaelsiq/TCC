const { app, BrowserWindow } = require('electron')

const OBSConnect = require('./OBS Pack/main'); 

let win
let connection = new OBSConnect();
async function createWindow () {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  }) 
  let teste = await connection.GetSceneList();
  console.log(teste)
  
  win.loadFile('./interfaces/pages/index/index.html')
  win.on('closed', () => {
    win = nullD
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
