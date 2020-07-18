//Router used to simplify things on client side

import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Game from './components/Game';

//Creating app.js component
const App = () => (
	<Router>
		<Route path="/" exact component={Game} />
	</Router>
);

//User greeted with Join component first, inputs his data and through query strings the data is passed towards to chat

export default App;
