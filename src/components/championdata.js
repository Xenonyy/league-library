import React from 'react';
import ChampionCards from "./championmainpage";
import {ChampionAPI} from "../api/champions";
import ChampionDetailPanel from './championdetailpanel';


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
        const d = document;
        
        const LoadAllAPI = async function() {
            for (let i = 0; i < cards.length; i++) {
                const response = await fetch("http://ddragon.leagueoflegends.com/cdn/10.23.1/data/en_US/champion/" + cards[i].id + ".json");
                const json = await response.json();
                Object.keys(json.data).forEach(key => {
                    AllData.push(json.data[key]);
                });
                function ChampionKeyVideo(ability) {
                    if (AllData[i].key.length === 3) {
                        d.getElementById("champion-detail-abilities-video").src = "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0" + AllData[i].key + "/ability_0" + AllData[i].key + "_" + ability +"1.webm";
                        d.getElementById("champion-detail-abilities-video-source-webm").src = "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0" + AllData[i].key + "/ability_0" + AllData[i].key + "_" + ability +"1.webm";
                    } else if (AllData[i].key.length === 2) {
                        d.getElementById("champion-detail-abilities-video").src = "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/00" + AllData[i].key + "/ability_00" + AllData[i].key + "_" + ability +"1.webm";
                        d.getElementById("champion-detail-abilities-video-source-webm").src = "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/00" + AllData[i].key + "/ability_00" + AllData[i].key + "_" + ability +"1.webm";
                    } else if (AllData[i].key.length === 1) {
                        d.getElementById("champion-detail-abilities-video").src = "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/000" + AllData[i].key + "/ability_000" + AllData[i].key + "_" + ability +"1.webm";
                        d.getElementById("champion-detail-abilities-video-source-webm").src = "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/000" + AllData[i].key + "/ability_000" + AllData[i].key + "_" + ability +"1.webm";
                    }
                }
                d.getElementById("champion-card-" + i).addEventListener('click',function (){
                    d.getElementsByTagName("title")[0].innerText = AllData[i].name + ' - ' + AllData[i].title;
                    d.getElementById("champBgImg").src = 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + AllData[i].id + '_0.jpg';
                    d.getElementById("champImg").src = 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + AllData[i].id + '_0.jpg';
                    d.getElementById("champion-detail-name").innerHTML = AllData[i].name;
                    d.getElementById("champion-detail-title").innerText = AllData[i].title.capitalize();
                    d.getElementById("champion-detail-description").innerText = AllData[i].blurb;
                    d.getElementById("champion-detail-description-full").innerText = AllData[i].lore;
                    d.getElementById("champion-detail-abilities-p-name").innerText = AllData[i].passive.name;
                    d.getElementById("champion-detail-abilities-p").src = "http://ddragon.leagueoflegends.com/cdn/10.23.1/img/passive/" + AllData[i].passive.image.full;
                    d.getElementById("champion-detail-abilities-q-name").innerText = AllData[i].spells[0].name;
                    d.getElementById("champion-detail-abilities-q").src = "http://ddragon.leagueoflegends.com/cdn/10.23.1/img/spell/" + AllData[i].spells[0].image.full;
                    d.getElementById("champion-detail-abilities-w-name").innerText = AllData[i].spells[1].name;
                    d.getElementById("champion-detail-abilities-w").src = "http://ddragon.leagueoflegends.com/cdn/10.23.1/img/spell/" + AllData[i].spells[1].image.full;
                    d.getElementById("champion-detail-abilities-e-name").innerText = AllData[i].spells[2].name;
                    d.getElementById("champion-detail-abilities-e").src = "http://ddragon.leagueoflegends.com/cdn/10.23.1/img/spell/" + AllData[i].spells[2].image.full;
                    d.getElementById("champion-detail-abilities-r-name").innerText = AllData[i].spells[3].name;
                    d.getElementById("champion-detail-abilities-r").src = "http://ddragon.leagueoflegends.com/cdn/10.23.1/img/spell/" + AllData[i].spells[3].image.full;

                    d.getElementById("champion-detail-abilities-p-container").addEventListener('mouseenter', function() {
                        d.getElementById("champion-detail-abilities-extra-detail-container").style.display = "flex";
                        d.getElementById("champion-detail-abilities-description").innerHTML = AllData[i].passive.description;
                        ChampionKeyVideo("P");
                        d.getElementById("champion-detail-ability-name-phone").innerText = "P - " + AllData[i].passive.name;
                    })
                    d.getElementById("champion-detail-abilities-q-container").addEventListener('mouseenter', function() {
                        d.getElementById("champion-detail-abilities-extra-detail-container").style.display = "flex";
                        d.getElementById("champion-detail-abilities-description").innerHTML = AllData[i].spells[0].description;
                        ChampionKeyVideo("Q");
                        d.getElementById("champion-detail-ability-name-phone").innerText = "Q - " + AllData[i].spells[0].name;
                    })
                    d.getElementById("champion-detail-abilities-w-container").addEventListener('mouseenter', function() {
                        d.getElementById("champion-detail-abilities-extra-detail-container").style.display = "flex";
                        d.getElementById("champion-detail-abilities-description").innerHTML = AllData[i].spells[1].description;
                        ChampionKeyVideo("W");
                        d.getElementById("champion-detail-ability-name-phone").innerText = "W - " + AllData[i].spells[1].name;
                    })
                    d.getElementById("champion-detail-abilities-e-container").addEventListener('mouseenter', function() {
                        d.getElementById("champion-detail-abilities-extra-detail-container").style.display = "flex";
                        d.getElementById("champion-detail-abilities-description").innerHTML = AllData[i].spells[2].description;
                        ChampionKeyVideo("E");
                        d.getElementById("champion-detail-ability-name-phone").innerText = "E - " + AllData[i].spells[2].name;
                    })
                    d.getElementById("champion-detail-abilities-r-container").addEventListener('mouseenter', function() {
                        d.getElementById("champion-detail-abilities-extra-detail-container").style.display = "flex";
                        d.getElementById("champion-detail-abilities-description").innerHTML = AllData[i].spells[3].description;
                        ChampionKeyVideo("R");
                        d.getElementById("champion-detail-ability-name-phone").innerText = "R - " + AllData[i].spells[3].name;
                    })
                    d.getElementById("champion-detail-abilities-video").addEventListener('mouseenter', function() {
                        this.muted = false;
                    })
                    d.getElementById("champion-detail-abilities-video").addEventListener('mouseleave', function() {
                        this.muted = true;
                    })
                    
                });
            }
            // console.log(AllData[2].key[0]);
        }
        LoadAllAPI();
        return([
            <ChampionCards cards = {this.state.cards}/>,
            <ChampionDetailPanel />
        ])
    }

}

export default ChampionData;