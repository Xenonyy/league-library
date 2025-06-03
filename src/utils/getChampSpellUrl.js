export const ChampionKeyVideo = (championKey, abilityKey) => {
  let correctKey = '0';
  if (championKey.length === 3) {
    correctKey = '0';
  } else if (championKey.length === 2) {
    correctKey = '00';
  } else if (championKey.length === 1) {
    correctKey = '000';
  }
  const baseURL = 'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/';
  return `${baseURL}${correctKey}${championKey}/ability_${correctKey}${championKey}_${abilityKey}1.webm`;
};
