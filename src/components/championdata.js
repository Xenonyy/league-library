import React from 'react';
import ChampionCards from "./championmainpage";
import {ChampionAPI} from "../api/champions";
import ChampionDetailPanel from './championdetailpanel';

const d = document,
    version = "10.25.1",
    cdn = "http://ddragon.leagueoflegends.com/cdn/",
    apiSpell = `${cdn + version}/img/spell/`,
    apiPassive = `${cdn + version}/img/passive/`,
    apiSpellImg = "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0",
    apiSplash = `${cdn}img/champion/splash/`;

class ChampionData extends React.Component {
    constructor(){
        super();
        this.state = {cards: []}
    }
    async componentDidMount() {
        const response = await fetch(ChampionAPI);
        const json = await response.json();
        let cards = [];
        Object.keys(json.data).forEach(key => {
            cards.push(json.data[key]);
        });
        this.setState({cards: cards});
    }
    render(){
        // eslint-disable-next-line
        String.prototype.capitalize = () => this.charAt(0).toUpperCase() + this.slice(1);
        let cards = this.state.cards;
        let AllData = [];
        const skinDiv = d.getElementById("champSkinsImg"),
            skinBgDiv = d.getElementById("champSkinsBgImg");

        const LoadAllAPI = async () => {
            for (const [x, card] of Object.entries(cards)) {
                const response = await fetch(`${cdn + version}/data/en_US/champion/${card.id}.json`);
                const json = await response.json();
                Object.keys(json.data).forEach(key => {
                    AllData.push(json.data[key]);
                });

                const champ = {};
                champ.name = AllData[x].name;
                champ.id = AllData[x].id;
                champ.title = AllData[x].title;
                champ.key = AllData[x].key;
                champ.skin = AllData[x].skins;
                champ.blurb = AllData[x].blurb;
                champ.lore = AllData[x].lore;

                const spells = {};
                spells.p = AllData[x].passive;
                spells.p.name = AllData[x].passive.name;
                spells.p.desc = AllData[x].passive.description;
                spells.p.img = AllData[x].passive.image.full;

                for (const [num, ability] of Object.entries(['q', 'w', 'e', 'r'])) {
                    spells[ability] = AllData[x].spells[num];
                    spells[ability].name = AllData[x].spells[num].name;
                    spells[ability].desc = AllData[x].spells[num].description;
                    spells[ability].img = AllData[x].spells[num].image.full;
                }
            
                function ChampionKeyVideo(ability) {
                    if (champ.key.length === 3) {
                        d.getElementById("champion-detail-abilities-video").src = `${apiSpellImg + champ.key}/ability_0${champ.key}_${ability}1.webm`;
                        d.getElementById("champion-detail-abilities-video-source-webm").src = `${apiSpellImg + champ.key}/ability_0${champ.key}_${ability}1.webm`;
                    } else if (champ.key.length === 2) {
                        d.getElementById("champion-detail-abilities-video").src = `${apiSpellImg}0${champ.key}/ability_00${champ.key}_${ability}1.webm`;
                        d.getElementById("champion-detail-abilities-video-source-webm").src = `${apiSpellImg}0${champ.key}/ability_00${champ.key}_${ability}1.webm`;
                    } else if (champ.key.length === 1) {
                        d.getElementById("champion-detail-abilities-video").src = `${apiSpellImg}00${champ.key}/ability_000${champ.key}_${ability}1.webm`;
                        d.getElementById("champion-detail-abilities-video-source-webm").src = `${apiSpellImg}00${champ.key}/ability_000${champ.key}_${ability}1.webm`;
                    }
                }
                d.querySelector(`#champion-card-${x}`).addEventListener('click', () => {
                    d.getElementsByTagName("title")[0].innerText = `${champ.name} - ${champ.title}`;
                    d.getElementById("champBgImg").src = `${apiSplash + champ.id}_0.jpg`;
                    d.getElementById("champImg").src = `${apiSplash + champ.id}_0.jpg`;
                    d.getElementById("champion-detail-name").innerText = champ.name;
                    d.getElementById("champion-detail-title").innerText = champ.title.capitalize();
                    d.getElementById("champion-detail-description").innerText = champ.blurb;
                    d.getElementById("champion-detail-description-full").innerText = champ.lore;
                    for (const [key, spell] of Object.entries(spells)) {
                        d.querySelector(`#champion-detail-abilities-${key}-name`).innerText = spell.name;
                        d.querySelector(`#champion-detail-abilities-${key}`).src = apiSpell + spell.img;
                    }
                    d.getElementById("champion-detail-abilities-p").src = apiPassive + spells.p.img;
                    skinDiv.src = `${apiSplash + champ.id}_0.jpg`;
                    skinBgDiv.src = `${apiSplash + champ.id}_0.jpg`;
                    d.getElementById("champion-detail-skins-name").innerText = champ.name;

                    // Proof of bug
                    console.log(champ.name)


                    // Slideshow of skins
                    const timer = ms => new Promise(res => setTimeout(res, ms)) // Returns a Promise that resolves after "ms" Milliseconds
                    let abort = false;
                    let j = 0;
                    // Manual toggle
                    d.getElementsByClassName("prev")[0].addEventListener("click", () => {
                        abort = true;
                        console.log(j, champ.skin.length)
                        if (j <= 0) {
                            return;
                        } else {
                            skinDiv.classList.remove("hide");
                            skinBgDiv.classList.remove("hide");
                            skinDiv.src = `${apiSplash + champ.id}_${champ.skin[j - 1].num}.jpg`;
                            skinBgDiv.src = `${apiSplash + champ.id}_${champ.skin[j - 1].num}.jpg`;
                            d.getElementById("champion-detail-skins-name").innerText = champ.skin[j - 1].name;
                            if (champ.skin[j - 1].name === "default") d.getElementById("champion-detail-skins-name").innerText = champ.name;
                            j--;
                        }
                    })
                    d.getElementsByClassName("next")[0].addEventListener("click", () => {
                        abort = true;
                        console.log(j, champ.skin.length)
                        if (j + 1 >= champ.skin.length) {
                            return;
                        } else {
                            skinDiv.classList.remove("hide");
                            skinBgDiv.classList.remove("hide");
                            skinDiv.src = `${apiSplash + champ.id}_${champ.skin[j + 1].num}.jpg`;
                            skinBgDiv.src = `${apiSplash + champ.id}_${champ.skin[j + 1].num}.jpg`;
                            d.getElementById("champion-detail-skins-name").innerText = champ.skin[j + 1].name;
                            if (champ.skin[j + 1].name === "default") d.getElementById("champion-detail-skins-name").innerText = champ.name;
                            j++;
                        }
                    })
                    // Automatic slideshow
                    async function slideShow () {
                        for (j = 0; j < champ.skin.length; j++) {
                            if (abort === false) {
                                skinDiv.src = `${apiSplash + champ.id}_${champ.skin[j].num}.jpg`;
                                skinBgDiv.src = `${apiSplash + champ.id}_${champ.skin[j].num}.jpg`;
                                skinDiv.classList.remove("hide");
                                skinBgDiv.classList.remove("hide");
                                if (champ.skin[j].name === "default") d.getElementById("champion-detail-skins-name").innerText = champ.name;
                                else d.getElementById("champion-detail-skins-name").innerText = champ.skin[j].name;

                                // Change the skin every 3 seconds with fade out effect
                                await timer(3000);
                                    if (abort === true) {
                                        skinDiv.classList.remove("hide");
                                        skinBgDiv.classList.remove("hide");
                                        return;
                                    } else {
                                        skinDiv.classList.add("hide");
                                        skinBgDiv.classList.add("hide-almost");
                                        await timer(500);
                                    }
                            }
                        }
                        // Reset to default if reached the end
                        if (abort === false) {
                            if (j >= champ.skin.length) {
                                skinDiv.classList.remove("hide");
                                skinBgDiv.classList.remove("hide");
                                skinDiv.src = `${apiSplash + champ.id}_0.jpg`;
                                skinBgDiv.src = `${apiSplash + champ.id}_0.jpg`;
                                d.getElementById("champion-detail-skins-name").innerText = champ.name;
                            }
                        }
                    }
                    slideShow();
                    d.getElementsByClassName("close-button")[0].addEventListener('click', () => {
                        abort = true;
                        j = 0;
                        // Proof of bug
                        console.log(champ.name)
                    })

                    // Show information when hovering
                    for (const [x, ability] of Object.entries(spells)) {
                        d.querySelector(`#champion-detail-abilities-${x}-container`).addEventListener('mouseenter', function () {
                            d.getElementById("champion-detail-abilities-extra-detail-container").style.display = "flex";
                            d.getElementById("champion-detail-abilities-description").innerHTML = ability.desc;
                            d.getElementById("champion-detail-ability-name-phone").innerText = `${x.toUpperCase()} - ${ability.name}`;
                            ChampionKeyVideo(`${x.toUpperCase()}`);
                        });
                    }
                    d.getElementById("champion-detail-abilities-video").addEventListener('mouseenter', function () {
                        this.muted = false;
                    })
                    d.getElementById("champion-detail-abilities-video").addEventListener('mouseleave', function () {
                        this.muted = true;
                    })

                    // Lower font size if line break would occur
                    for (const div of d.querySelectorAll(".abilities-name")) {
                        // Sometimes randomly missing 1 block so using if condition
                        if (div.clientHeight <= 32) continue;
                            div.style.fontSize = "0.8rem";
                            div.style.whiteSpace = "nowrap";
                    }
                });
            }
        }
        LoadAllAPI();
        return([
            <ChampionCards key = {0.1} cards = {this.state.cards}/>,
            <ChampionDetailPanel key = {0.2}/> // Random key values, to remove the warnings.
        ])
    }

}

export default ChampionData;