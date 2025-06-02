import { useCallback, useState } from 'react';
import ChampionDetailPanel from './components/champions/ChampionDetailPanel';
import ChampionMainPage from './components/champions/ChampionMainPage';
import WelcomePage from './components/layout/WelcomePage/WelcomePage';
import ConditionalHeader from './components/layout/Header/ConditionalHeader';
import BackToTop from './components/layout/BackToTop/BackToTop';
import Footer from './components/layout/Footer/Footer';
import TopContainer from './components/search/TopContainer';
import { useChampionData } from './hooks/useFetchChampionData';

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [selectedChampionId, setSelectedChampionId] = useState(null);
  const [skinIndex, setSkinIndex] = useState(0);
  const allData = useChampionData();
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearchChange = useCallback(value => {
    setSearchTerm(value);
  }, []);

  return (
    <>
      {showWelcome && <WelcomePage onFinish={() => setShowWelcome(false)} />}
      <div className="container">
        <ConditionalHeader />
        <TopContainer onSearchChange={handleSearchChange} />
        <div className="champion-container">
          {selectedChampionId !== null && (
            <ChampionDetailPanel
              champion={allData[selectedChampionId]}
              skinIndex={skinIndex}
              setSkinIndex={setSkinIndex}
              onClose={() => setSelectedChampionId(null)}
            />
          )}
          <ChampionMainPage
            cards={Object.values(allData)}
            onChampionClick={setSelectedChampionId}
            hidden={selectedChampionId !== null}
            filterText={searchTerm}
          />
        </div>
        <BackToTop />
        <Footer />
      </div>
    </>
  );
};

export default App;
