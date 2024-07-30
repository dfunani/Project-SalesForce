const { app, BrowserWindow } = require("electron");
const Main = require("electron/main");

class MainWindow {
  electron_window() {
    const window = new BrowserWindow({
      width: 800,
      height: 600,
    });
    window.loadFile("./index.html");
  }

  create_window() {
    app.whenReady().then(() => this.electron_window());
  }
}

const app_window = new MainWindow();
app_window.create_window();
