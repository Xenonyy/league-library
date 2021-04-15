import React from 'react';
import BackToTop from './components/layout/BackToTop/BackToTop';
import ChampionData from './components/champions/ChampionData';
import Footer from './components/layout/Footer/Footer';
import { Results } from './components/search/Results';
import TopContainer from './components/search/TopContainer';
import WelcomePage from './components/layout/WelcomePage/WelcomePage';
import ChampionDetailPanel from './components/champions/ChampionDetailPanel';
import ConditionalHeader from './components/layout/Header/ConditionalHeader';


function App() {
	return ([
		<WelcomePage key = {"WelcomePage"} />,
		<div className = "container" key = {"container"}>
			<ConditionalHeader />
			<TopContainer />
			<div className = "champion-container">
				<ChampionDetailPanel />
				<ChampionData />
				<Results />
			</div>
			<BackToTop />
			<Footer  />
		</div>
	]);
}

export default App;