const shuffle = (newTiles) => {
	var temp = 0;
	for (var i = 0; i < newTiles.length - 1; i++) {
		for (var m = 0; m < newTiles.length - i - 1; m++) {
			if (newTiles[m].num > newTiles[m + 1].num) {
				temp = newTiles[m];
				newTiles[m] = newTiles[m + 1];
				newTiles[m + 1] = temp;
			}
			if (newTiles[m].num == newTiles[m + 1].num && newTiles[m].colour > newTiles[m + 1].colour) {
				temp = newTiles[m];
				newTiles[m] = newTiles[m + 1];
				newTiles[m + 1] = temp;
			}
		}
	}
	return newTiles;
};

module.exports = { shuffle };
