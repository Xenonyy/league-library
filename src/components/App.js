import React from 'react';
import ChampionData from './championdata';
import Footer from './footer';
import Header from './header';
import Results from './result';
import Search from './search';


function App() {
	return ([
		<div className = "container">
			<Header />
			<span id = "updated">Last Updated: 2020/12/18</span>
			<h1 className = "title non-selectable">League Library</h1>
			<Search />
			<div className = "champion-container">
				<ChampionData />
				<Results />
			</div>
		</div>,
		<Footer />
	]);
}

export default App;