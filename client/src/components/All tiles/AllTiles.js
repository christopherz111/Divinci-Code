import React from 'react';

const allTiles = ({ ownTiles, colour }) => ({
	ownTiles: num.map((ownTile, i) => (
		<div key={i}>
			{' '}
			<allTiles ownTiles={ownTiles} />
		</div>
	))
});
