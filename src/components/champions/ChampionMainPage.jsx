import { useMemo } from 'react';
import { memo } from 'react';

const ChampionMainPageComponent = ({ cards = [], onChampionClick, filterText = '' }) => {
  const handleClick = championId => {
    onChampionClick(championId);
  };

  const filteredCards = useMemo(() => {
    return cards.filter(champ => champ.name.toLowerCase().includes(filterText.toLowerCase()));
  }, [cards, filterText]);

  const hasLoaded = cards.length > 0;

  return (
    <>
      {hasLoaded && filteredCards.length === 0 && (
        <div id="no-results-container" style={{ display: 'flex' }}>
          No champions found.
        </div>
      )}
      {filteredCards.map((champion, i) => (
        <div
          key={champion.id}
          className="champion-card non-selectable"
          id={`champion-card-${i}`}
          onClick={() => handleClick(champion.id)}
        >
          <div className="champion-loading">
            <img
              data-testid="champion-images"
              src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
              alt={`Splash art for ${champion.name}`}
              className="champion-card-image"
            />
          </div>
          <div className="champion-card-name">{champion.name.toUpperCase()}</div>
        </div>
      ))}
    </>
  );
};

const ChampionMainPage = memo(ChampionMainPageComponent);
export default ChampionMainPage;
