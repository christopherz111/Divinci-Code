const e = require('express');

const tilegen = () => {
	const tiles = [];
	const randomNum = new Array(24);
	for (var i = 0; i < randomNum.length; i++) {
		randomNum[i] = i;
	}
	var currentIndex = randomNum.length,
		temporaryValue,
		randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = randomNum[currentIndex];
		randomNum[currentIndex] = randomNum[randomIndex];
		randomNum[randomIndex] = temporaryValue;
	}
	for (var i = 0; i < randomNum.length; i++) {
		if (randomNum[i] / 11 > 1) {
			num = randomNum[i] % 12;
			colour = 'black';
			const tile = { num, colour };
			tiles.push(tile);
		} else {
			num = randomNum[i];
			colour = 'white';
			const tile = { num, colour };
			tiles.push(tile);
		}
	}
	return tiles;
};

module.exports = { tilegen };
