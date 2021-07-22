const electron = require("electron");
const { app, BrowserWindow, Menu, ipcMain, dialog } = electron;

require("electron-reload")(__dirname);

// if you wanna use application menu, delete below code
Menu.setApplicationMenu(null);

let win = null;
let defaultScreenSize = {
  w: 800,
  h: 600,
};

let createWindow = () => {
  const { width, height } = electron.screen.getPrimaryDisplay().workAreaSize;

  let w = width > defaultScreenSize.w ? defaultScreenSize.w : width;
  let h = height > defaultScreenSize.h ? defaultScreenSize.h : height;
  win = new BrowserWindow({
    width: w,
    height: h,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
    titleBarStyle: "hidden",
    frame: false,
  });
  win.loadFile("index.html");
  //win.webContents.openDevTools();

  win.on("closed", () => {
    win = null;
  });
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});
