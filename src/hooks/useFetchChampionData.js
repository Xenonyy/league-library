import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { Version } from '../enums/version';

export const useChampionData = () => {
  const version = Version.PATCH;
  const cdn = 'https://ddragon.leagueoflegends.com/cdn';
  const [allData, setAllData] = useLocalStorage(`championData-${version}`, {});

  useEffect(() => {
    if (Object.keys(allData).length > 0) return;

    const fetchAllChampionData = async () => {
      try {
        const response = await fetch(`${cdn}/${version}/data/en_US/champion.json`);
        const json = await response.json();
        const championList = Object.values(json.data);

        const details = await Promise.all(
          championList.map(champ =>
            fetch(`${cdn}/${version}/data/en_US/champion/${champ.id}.json`)
              .then(res => res.json())
              .then(detail => detail.data[champ.id]),
          ),
        );

        const dataMap = {};
        details.forEach(detail => {
          dataMap[detail.id] = detail;
        });

        setAllData(dataMap);
      } catch (err) {
        console.error('Failed to fetch champion data:', err);
      }
    };

    fetchAllChampionData();
  }, [version, allData, setAllData]);

  return allData;
};
