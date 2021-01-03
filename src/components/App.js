import React from 'react';
import BackToTop from './backtotop';
import ChampionData from './championdata';
import Footer from './footer';
import Header from './header';
import Results from './result';
import TopContainer from './topcont';
import WelcomePage from './welcomepage';


function App() {
	return ([
		<WelcomePage />,
		<div className = "container">
			<Header />
			<TopContainer />
			<div className = "champion-container">
				<ChampionData />
				<Results />
			</div>
		</div>,
		<BackToTop />,
		<Footer />
	]);
}

export default App;