import React from 'react';
import ChampionData from './championdata';
import Footer from './footer';
import Header from './header';
import Results from './result';
import TopContainer from './topcont';


function App() {
	return ([
		<div className = "container">
			<Header />
			<TopContainer />
			<div className = "champion-container">
				<ChampionData />
				<Results />
			</div>
		</div>,
		<Footer />
	]);
}

export default App;