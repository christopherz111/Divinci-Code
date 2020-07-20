const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const PORT = process.env.PORT || 5000;
const { tilegen } = require('./tiles');
const router = require('./router');
const { shuffle } = require('./shuffle');
const app = express();
const server = http.createServer(app);
const io = socketio(server);
const tiles = tilegen();
const tileColour = [];

io.on('connection', (socket) => {
	var newTiles = tiles.splice(-4);
	const newRandTiles = shuffle(newTiles);
	socket.on('startGame', () => {
		io.to(socket.id).emit('grabTiles', newTiles);
		console.log('newTiles', newTiles);
		for (var i = 0; i < newTiles.length; i++) {
			tileColour.push(newTiles[i].colour);
		}
		socket.emit('grabColour', tileColour);
		//console.log(newTiles);
		//console.log(tileColour);
	});

	socket.on('randomTile', () => {
		if (tiles.length === 0) {
			return null;
		}
		const randTile = tiles.splice(-1);
		const newRandTiles = shuffle(newTiles.concat(randTile));
		newTiles = newTiles.concat(randTile);
		io.to(socket.id).emit('newRandNum', newRandTiles);
		console.log('newRandTiles', newRandTiles);
	});

	socket.on('disconnect', () => {
		console.log('user has left!!!');
	});
});

app.use(router);

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
