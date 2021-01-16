import React from 'react';
import BackToTop from './components/layout/BackToTop/BackToTop';
import ChampionData from './components/champions/ChampionData';
import Footer from './components/layout/Footer/Footer';
import Header from './components/layout/Header/Header';
import Results from './components/search/Results';
import TopContainer from './components/search/TopContainer';
import WelcomePage from './components/layout/WelcomePage/WelcomePage';


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