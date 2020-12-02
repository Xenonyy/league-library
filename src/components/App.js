import React from 'react';
import ChampionData from './championdata';
import Footer from './footer';
import Header from './header';


function App() {
	return ([
		<div className = "container">
			<Header />
			<h1 className = "title non-selectable">League Library</h1>
			<div className = "champion-container">
			<ChampionData />
			</div>
			<Footer />
		</div>
	]);
}

export default App;