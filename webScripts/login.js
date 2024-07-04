'use strict';

(() => {
	const electon = require('electron');
	const ipcRenderer= electon.ipcRenderer;
	const SocketEvent = require('../handler_manager/event/SocketEvent');
	ipcRenderer.on(SocketEvent.HELLO, (event, message) => {
		console.log(message)
	})
})();