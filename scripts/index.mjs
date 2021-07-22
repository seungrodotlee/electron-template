const { ipcRenderer, remote } = require("electron");
const app = remote.app;
const titlebar = require("custom-electron-titlebar");

// const {} = require("./methods.mjs");

new titlebar.Titlebar({
  backgroundColor: titlebar.Color.fromHex("#000000"),
  titleHorizontalAlignment: "left",
});
