'use strict';

module.exports = (socket, win) => {
	const SocketEvent = require('../event/SocketEvent');
	console.log(`socket Connected socket id is ${socket.id}`);
	socket.emit(SocketEvent.HELLO, {message: 'Hello Server!'});
	win.webContents.send(SocketEvent.HELLO, {message: 'Hello Renderer Process!'});
}