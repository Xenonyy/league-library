import React from 'react';
import ChampionCards from "./championmainpage";
import {ChampionAPI} from "../api/champions";
import ChampionDetailPanel from './championdetailpanel';

const d = document;
const version = "10.25.1";
const apiSpell = "http://ddragon.leagueoflegends.com/cdn/" + version + "/img/spell/";
const apiPassive = "http://ddragon.leagueoflegends.com/cdn/" + version + "/img/passive/";
const apiSpellImg = "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0";
const apiSplash = "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/";

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
                let champName = AllData[i].name,
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
                    RImg = AllData[i].spells[3].image.full,
                    champSkin = AllData[i].skins;
            
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
                    d.getElementById("champBgImg").src = apiSplash + AllData[i].id + '_0.jpg';
                    d.getElementById("champImg").src = apiSplash + AllData[i].id + '_0.jpg';
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


                    // Slideshow of skins
                    const timer = ms => new Promise(res => setTimeout(res, ms)) // Returns a Promise that resolves after "ms" Milliseconds
                    let abort = false;
                    let j = 0;

                    // Manual toggle
                    d.getElementsByClassName("prev")[0].addEventListener("click", function () {
                        let champSkin = AllData[i].skins; // Gives typeError 'undefined' for champSkin without this for some reason.
                        abort = true;
                        console.log(j, champSkin.length)
                        if (j <= 0) {
                            return;
                        } else {
                            d.getElementById("champSkinsImg").className = '';
                            d.getElementById("champSkinsBgImg").className = '';
                            d.getElementById("champSkinsImg").src = apiSplash + AllData[i].id + '_'+ champSkin[j - 1].num + '.jpg';
                            d.getElementById("champSkinsBgImg").src = apiSplash + AllData[i].id + '_'+ champSkin[j - 1].num + '.jpg';
                            d.getElementById("champion-detail-skins-name").innerText = AllData[i].skins[j - 1].name;
                            if (AllData[i].skins[j - 1].name === "default") {
                                d.getElementById("champion-detail-skins-name").innerText = champName;
                            }
                            j = j - 1;
                            console.log(j, abort);
                        }
                    })
                    d.getElementsByClassName("next")[0].addEventListener("click", function () {
                        abort = true;
                        console.log(j, champSkin.length)
                        if (j + 1 >= champSkin.length) {
                            return;
                        } else {
                            d.getElementById("champSkinsImg").className = '';
                            d.getElementById("champSkinsBgImg").className = '';
                            d.getElementById("champSkinsImg").src = apiSplash + AllData[i].id + '_'+ champSkin[j + 1].num + '.jpg';
                            d.getElementById("champSkinsBgImg").src = apiSplash + AllData[i].id + '_'+ champSkin[j + 1].num + '.jpg';
                            d.getElementById("champion-detail-skins-name").innerText = AllData[i].skins[j + 1].name;
                            if (AllData[i].skins[j + 1].name === "default") {
                                d.getElementById("champion-detail-skins-name").innerText = champName;
                            }
                            j = j + 1;
                            console.log(j, abort, champSkin);
                        }
                    })
                    // Automatic slideshow
                    async function load () {
                        for (j = 0; j < champSkin.length; j++) {
                            if (abort === false) {
                                d.getElementById("champSkinsImg").src = apiSplash + AllData[i].id + '_'+ champSkin[j].num + '.jpg';
                                d.getElementById("champSkinsBgImg").src = apiSplash + AllData[i].id + '_'+ champSkin[j].num + '.jpg';
                                let skinName = AllData[i].skins[j].name;
                                d.getElementById("champSkinsImg").className = '';
                                d.getElementById("champSkinsBgImg").className = '';
                                
                                if (skinName === "default") {
                                    d.getElementById("champion-detail-skins-name").innerText = champName;
                                } else {
                                    d.getElementById("champion-detail-skins-name").innerText = skinName;
                                }
                                await timer(3000);
                                    if (abort === true) {
                                        d.getElementById("champSkinsImg").className = '';
                                        d.getElementById("champSkinsBgImg").className = '';
                                        return;
                                    } else {
                                        d.getElementById("champSkinsImg").className = 'hide';
                                        d.getElementById("champSkinsBgImg").className = 'hide-almost';
                                        await timer(500);
                                    }
                            }
                        }
                        // Reset to default if reached the end
                        if (abort === false) {
                            if (j >= champSkin.length) {
                                d.getElementById("champSkinsImg").className = '';
                                d.getElementById("champSkinsBgImg").className = '';
                                d.getElementById("champSkinsImg").src = apiSplash + AllData[i].id + '_'+ champSkin[0].num + '.jpg';
                                d.getElementById("champSkinsBgImg").src = apiSplash + AllData[i].id + '_'+ champSkin[0].num + '.jpg';
                                d.getElementById("champion-detail-skins-name").innerText = champName;
                            }
                        }
                    }
                    load();
                    d.getElementsByClassName("close-button")[0].addEventListener('click', () => {
                        abort = true;
                        champSkin.length = 0;
                    })
                    

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
                    // Lower font size if line break would occur
                    let nameDiv = document.getElementsByClassName("abilities-name");
                        for (let i = 0; i < nameDiv.length; i++) {
                            // Sometimes randomly missing 1 block so using while loop instead of if condition
                            while (nameDiv[i].clientHeight > 32) {
                                nameDiv[i].style.fontSize = "0.8rem";
                                nameDiv[i].style.whiteSpace = "nowrap";
                            }
                        }
                });
            }
            window.localStorage.setItem("mainAPI", JSON.stringify(cards))
            let StoreChampData = JSON.parse(localStorage.getItem("mainAPI"))
            console.log(StoreChampData[0]) // Successfully stored in localstorage
        }
        LoadAllAPI();
        return([
            <ChampionCards cards = {this.state.cards}/>,
            <ChampionDetailPanel />
        ])
    }

}

export default ChampionData;