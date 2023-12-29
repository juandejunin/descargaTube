// main.js
const { app, BrowserWindow } = require('electron');
const path = require('path');
const electron = require('electron');
const appDownload = require('./appDownload');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true
    }
  });

  mainWindow.loadFile('public/index.html');

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

app.whenReady().then(() => {

  // Llama a appDownload para obtener la aplicación y el servidor
  const { app: appInstance, server } = appDownload();

  // Realiza operaciones adicionales si es necesario con appInstance o server

  // Crea la ventana cuando sea el momento adecuado
  createWindow();
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
  if (mainWindow === null) createWindow();
});

