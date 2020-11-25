import React from 'react';
import ChampionData from './championdata';


function App() {
	return (
		<div className = "container">
			<header className = "title non-selectable">League Library</header>
			<div className = "champion-container">
			<ChampionData/>
			</div>
		</div>
	);
}

export default App;