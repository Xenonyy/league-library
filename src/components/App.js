import React from 'react';
import BackToTop from './layout/BackToTop';
import ChampionData from './champions/ChampionData';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Results from './search/Results';
import TopContainer from './layout/TopContainer';
import WelcomePage from './layout/WelcomePage';


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