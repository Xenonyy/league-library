import React from 'react';
import ChampionCards from "./championmainpage";
import {ChampionAPI} from "../api/champions";
import ChampionDetailPanel from './championdetailpanel';

const d = document;
const version = "10.25.1";
const apiSpell = "http://ddragon.leagueoflegends.com/cdn/" + version + "/img/spell/";
const apiPassive = "http://ddragon.leagueoflegends.com/cdn/" + version + "/img/passive/";
const apiSpellImg = "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0";

class ChampionData extends React.Component {
    constructor(){
        super();
        this.state = { api: [], cards: [] }
    }
    async componentDidMount() {
        const response = await fetch(ChampionAPI);
        const json = await response.json();
        let cards = [];
        Object.keys(json.data).forEach(key => {
            cards.push(json.data[key]);
        });
        this.setState({ api: json, cards: cards});
    }
    render(){
        // eslint-disable-next-line
        String.prototype.capitalize = () => {
            return this.charAt(0).toUpperCase() + this.slice(1);
        }
        let cards = this.state.cards;
        let AllData = [];
        
        const LoadAllAPI = async function() {
            for (let i = 0; i < cards.length; i++) {
                const response = await fetch("http://ddragon.leagueoflegends.com/cdn/" + version + "/data/en_US/champion/" + cards[i].id + ".json");
                const json = await response.json();
                Object.keys(json.data).forEach(key => {
                    AllData.push(json.data[key]);
                });
                const champName = AllData[i].name,
                    champTitle = AllData[i].title,
                    champKey = AllData[i].key, 
                    PName = AllData[i].passive.name,
                    QName = AllData[i].spells[0].name,
                    WName = AllData[i].spells[1].name,
                    EName = AllData[i].spells[2].name,
                    RName = AllData[i].spells[3].name,
                    PDesc = AllData[i].passive.description,
                    QDesc = AllData[i].spells[0].description,
                    WDesc = AllData[i].spells[1].description,
                    EDesc = AllData[i].spells[2].description,
                    RDesc = AllData[i].spells[3].description,
                    PImg = AllData[i].passive.image.full,
                    QImg = AllData[i].spells[0].image.full,
                    WImg = AllData[i].spells[1].image.full,
                    EImg = AllData[i].spells[2].image.full,
                    RImg = AllData[i].spells[3].image.full;

                function ChampionKeyVideo(ability) {
                    if (champKey.length === 3) {
                        d.getElementById("champion-detail-abilities-video").src = apiSpellImg + champKey + "/ability_0" + champKey + "_" + ability + "1.webm";
                        d.getElementById("champion-detail-abilities-video-source-webm").src = apiSpellImg + champKey + "/ability_0" + champKey + "_" + ability + "1.webm";
                    } else if (champKey.length === 2) {
                        d.getElementById("champion-detail-abilities-video").src = apiSpellImg + "0" + champKey + "/ability_00" + champKey + "_" + ability + "1.webm";
                        d.getElementById("champion-detail-abilities-video-source-webm").src = apiSpellImg + "0" + champKey + "/ability_00" + champKey + "_" + ability + "1.webm";
                    } else if (champKey.length === 1) {
                        d.getElementById("champion-detail-abilities-video").src = apiSpellImg + "00" + champKey + "/ability_000" + champKey + "_" + ability + "1.webm";
                        d.getElementById("champion-detail-abilities-video-source-webm").src = apiSpellImg + "00" + champKey + "/ability_000" + champKey + "_" + ability + "1.webm";
                    }
                }

                d.getElementById("champion-card-" + i).addEventListener('click', function (){
                    d.getElementsByTagName("title")[0].innerText = champName + ' - ' + champTitle;
                    d.getElementById("champBgImg").src = 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + AllData[i].id + '_0.jpg';
                    d.getElementById("champImg").src = 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + AllData[i].id + '_0.jpg';
                    d.getElementById("champion-detail-name").innerHTML = champName;
                    d.getElementById("champion-detail-title").innerText = champTitle.capitalize();
                    d.getElementById("champion-detail-description").innerText = AllData[i].blurb;
                    d.getElementById("champion-detail-description-full").innerText = AllData[i].lore;
                    d.getElementById("champion-detail-abilities-p-name").innerText = PName;
                    d.getElementById("champion-detail-abilities-p").src = apiPassive + PImg;
                    d.getElementById("champion-detail-abilities-q-name").innerText = QName;
                    d.getElementById("champion-detail-abilities-q").src = apiSpell + QImg;
                    d.getElementById("champion-detail-abilities-w-name").innerText = WName;
                    d.getElementById("champion-detail-abilities-w").src = apiSpell + WImg;
                    d.getElementById("champion-detail-abilities-e-name").innerText = EName;
                    d.getElementById("champion-detail-abilities-e").src = apiSpell + EImg;
                    d.getElementById("champion-detail-abilities-r-name").innerText = RName;
                    d.getElementById("champion-detail-abilities-r").src = apiSpell + RImg;

                    d.getElementById("champion-detail-abilities-p-container").addEventListener('mouseenter', function() {
                        d.getElementById("champion-detail-abilities-extra-detail-container").style.display = "flex";
                        d.getElementById("champion-detail-abilities-description").innerHTML = PDesc;
                        ChampionKeyVideo("P");
                        d.getElementById("champion-detail-ability-name-phone").innerText = "P - " + PName;
                    })
                    d.getElementById("champion-detail-abilities-q-container").addEventListener('mouseenter', function() {
                        d.getElementById("champion-detail-abilities-extra-detail-container").style.display = "flex";
                        d.getElementById("champion-detail-abilities-description").innerHTML = QDesc;
                        ChampionKeyVideo("Q");
                        d.getElementById("champion-detail-ability-name-phone").innerText = "Q - " + QName;
                    })
                    d.getElementById("champion-detail-abilities-w-container").addEventListener('mouseenter', function() {
                        d.getElementById("champion-detail-abilities-extra-detail-container").style.display = "flex";
                        d.getElementById("champion-detail-abilities-description").innerHTML = WDesc;
                        ChampionKeyVideo("W");
                        d.getElementById("champion-detail-ability-name-phone").innerText = "W - " + WName;
                    })
                    d.getElementById("champion-detail-abilities-e-container").addEventListener('mouseenter', function() {
                        d.getElementById("champion-detail-abilities-extra-detail-container").style.display = "flex";
                        d.getElementById("champion-detail-abilities-description").innerHTML = EDesc;
                        ChampionKeyVideo("E");
                        d.getElementById("champion-detail-ability-name-phone").innerText = "E - " + EName;
                    })
                    d.getElementById("champion-detail-abilities-r-container").addEventListener('mouseenter', function() {
                        d.getElementById("champion-detail-abilities-extra-detail-container").style.display = "flex";
                        d.getElementById("champion-detail-abilities-description").innerHTML = RDesc;
                        ChampionKeyVideo("R");
                        d.getElementById("champion-detail-ability-name-phone").innerText = "R - " + RName;
                    })
                    d.getElementById("champion-detail-abilities-video").addEventListener('mouseenter', function() {
                        this.muted = false;
                    })
                    d.getElementById("champion-detail-abilities-video").addEventListener('mouseleave', function() {
                        this.muted = true;
                    })
                    
                });
            }
        }
        LoadAllAPI();
        return([
            <ChampionCards cards = {this.state.cards}/>,
            <ChampionDetailPanel />
        ])
    }

}

export default ChampionData;