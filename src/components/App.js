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
		<WelcomePage key = {0} />,
		<div className = "container" key = {1}>
			<Header />
			<TopContainer />
			<div className = "champion-container" key = {2}>
				<ChampionData />
				<Results />
			</div>
			<BackToTop />
			<Footer  />
		</div>
	]);
}

export default App;