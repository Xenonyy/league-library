import React from 'react';
import BackToTop from './layout/BackToTop/BackToTop';
import ChampionData from './champions/ChampionData';
import Footer from './layout/Footer/Footer';
import Header from './layout/Header/Header';
import Results from './search/Results';
import TopContainer from './search/TopContainer';
import WelcomePage from './layout/WelcomePage/WelcomePage';


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