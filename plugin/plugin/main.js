const { app, BrowserWindow } = require('electron')

const OBSConnect = require('./OBS Pack/main'); 

let win
let connection = new OBSConnect();
async function createWindow () {
  connection.InsertItemScene({type:'website', url:'http://localhost:3001/ad/display'})

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
