'use strict';

const electron = require('electron');
const { app, BrowserWindow } = electron;
const url = require('url');
const path = require('path');

let win;

app.on('ready', () => {
	const { width, height } = electron.screen.getPrimaryDisplay().workAreaSize;
	const options = {
		width: width,
		height: height,
		resizable: false,
		fullscreenable: false,
		webPreferences: {
			affinity:true,
			nodeIntegration: false
		}
	};
	win = new BrowserWindow(options);
	win.loadURL(url.format({
		pathname:path.join(__dirname, 'login.html'),
		protocol: 'file',
		slashes: true
	}));
	win.webContents.openDevTools()
});

app.on('window-all-closed', () => {
	app.quit();
})
app.on('activate', () => {
	app.quit();
})