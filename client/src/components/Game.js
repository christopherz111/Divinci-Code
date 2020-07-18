import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

let socket;

const Game = (location) => {
	const [ ownTiles, setTiles ] = useState([]);
	const [ opponentCol, setColour ] = useState([]);
	const [ user, setUser ] = useState('');
	//const [ randTile, setRandTile ] = useState([]);
	const ENDPOINT = 'localhost:5000';

	useEffect(
		() => {
			socket = io(ENDPOINT);
			socket.emit('startGame');
			return () => {
				socket.emit('disconnect');

				socket.off();
			};
		},
		[ ENDPOINT, location.search ]
	);

	useEffect(() => {
		socket.on('newRandNum', (randTile) => {
			setTiles([ ...ownTiles, randTile ]);
		});
	});

	useEffect(() => {
		socket.on('grabTiles', (newTiles) => {
			console.log('newTiles', newTiles);
			setTiles(newTiles);
		});
		socket.on('grabColour', (tileColour) => {
			setColour((opponentCol) => [ ...opponentCol, tileColour ]);
		});
	});

	const randomTile = (event) => {
		event.preventDefault();

		socket.emit('randomTile');
	};

	console.log(opponentCol);
	console.log(ownTiles);

	return (
		<div>
			game
			<button onClick={(e) => randomTile(e)}>Pick up new tile</button>
		</div>
	);
};

export default Game;
