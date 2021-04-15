import React from 'react';
import {ChampionAPI} from "../../api/champions";
import ChampionMainPage from './ChampionMainPage';

const d = document,
    version = "11.8.1",
    cdn = "http://ddragon.leagueoflegends.com/cdn/",
    apiSpell = `${cdn + version}/img/spell/`,
    apiPassive = `${cdn + version}/img/passive/`,
    apiSpellImg = "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0",
    apiSplash = `${cdn}img/champion/splash/`;

class ChampionData extends React.Component {
    constructor(){
        super();
        this.state = {cards: [], counter: 0}
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
        let AllData = [];
        const skinDiv = d.getElementById("champSkinsImg"),
            skinBgDiv = d.getElementById("champSkinsBgImg");

        window.onload = () => {
            for (const [x, div] of Object.entries(d.querySelectorAll(".champion-card"))) {
                const champName = d.querySelectorAll(".champion-card-name");
                div.addEventListener("click", async () => {
                    let counter = this.state.counter;

                    // Fetch the champion json the user clicked on
                    const response = await fetch(`${cdn + version}/data/en_US/champion/${champName[x].innerText.toLowerCase().capitalize()}.json`);
                    const json = await response.json();
                    Object.keys(json.data).forEach(key => {
                        AllData.push(json.data[key]);
                    });
                    console.log(AllData, counter);

                    // Assign all the received data to objects
                    const champion = {
                        name: AllData[counter].name,
                        id: AllData[counter].id,
                        title: AllData[counter].title,
                        key: AllData[counter].key,
                        skins: AllData[counter].skins,
                        blurb: AllData[counter].blurb,
                        lore: AllData[counter].lore,
                        spell: AllData[counter].spells,
                    };
                    const { name, id, title, key, skins, blurb, lore, spell } = champion;
    
                    const spells = {
                        p: {
                            name: AllData[counter].passive.name,
                            desc: AllData[counter].passive.description,
                            img: AllData[counter].passive.image.full,
                        }
                    };

                    for (const [num, ability] of Object.entries(['q', 'w', 'e', 'r'])) {
                        spells[ability] = spell[num];
                        spells[ability].name = spell[num].name;
                        spells[ability].desc = spell[num].description;
                        spells[ability].img = spell[num].image.full;
                    }
                    d.getElementsByTagName("title")[0].innerText = `${name} - ${title}`;
                    d.getElementById("champBgImg").src = `${apiSplash + id}_0.jpg`;
                    d.getElementById("champImg").src = `${apiSplash + id}_0.jpg`;
                    d.getElementById("champion-detail-name").innerText = name;
                    d.getElementById("champion-detail-title").innerText = title.capitalize();
                    d.getElementById("champion-detail-description").innerText = blurb;
                    d.getElementById("champion-detail-description-full").innerText = lore;
                    for (const [key, spell] of Object.entries(spells)) {
                        d.querySelector(`#champion-detail-abilities-${key}-name`).innerText = spell.name;
                        d.querySelector(`#champion-detail-abilities-${key}`).src = apiSpell + spell.img;
                    }
                    d.getElementById("champion-detail-abilities-p").src = apiPassive + spells.p.img;

                    // Preload all skins on champion click
                    for (const skin of skins) {
                        const preloadImages = (url) => {
                            new Image().src = url;
                        }
                        preloadImages(`${apiSplash + id}_${skin.num}.jpg`)
                    }
                    d.getElementById("champion-detail-skins-name").innerText = name;

                    // Assign the video source for each ability
                    function ChampionKeyVideo(ability) {
                        if (key.length === 3) {
                            d.getElementById("champion-detail-abilities-video").src = `${apiSpellImg + key}/ability_0${key}_${ability}1.webm`;
                            d.getElementById("champion-detail-abilities-video-source-webm").src = `${apiSpellImg + key}/ability_0${key}_${ability}1.webm`;
                        } else if (key.length === 2) {
                            d.getElementById("champion-detail-abilities-video").src = `${apiSpellImg}0${key}/ability_00${key}_${ability}1.webm`;
                            d.getElementById("champion-detail-abilities-video-source-webm").src = `${apiSpellImg}0${key}/ability_00${key}_${ability}1.webm`;
                        } else if (key.length === 1) {
                            d.getElementById("champion-detail-abilities-video").src = `${apiSpellImg}00${key}/ability_000${key}_${ability}1.webm`;
                            d.getElementById("champion-detail-abilities-video-source-webm").src = `${apiSpellImg}00${key}/ability_000${key}_${ability}1.webm`;
                        }
                    }
                    // Show abilities information when hovering
                    for (const [x, ability] of Object.entries(spells)) {
                        d.querySelector(`#champion-detail-abilities-${x}-container`).addEventListener('mouseenter', function () {
                            d.getElementById("champion-detail-abilities-extra-detail-container").style.display = "flex";
                            d.getElementById("champion-detail-abilities-description").innerHTML = ability.desc;
                            d.getElementById("champion-detail-ability-name-phone").innerText = `${x.toUpperCase()} - ${ability.name}`;
                            ChampionKeyVideo(`${x.toUpperCase()}`);
                        });
                    }
                    const setVolume = () => {
                        const video = d.getElementById("champion-detail-abilities-video");
                        video.volume = 0.3;
                        video.addEventListener('mouseenter', function () { this.muted = false });
                        video.addEventListener('mouseleave', function () { this.muted = true });
                    }
                    setVolume();

                    // Slideshow of skins
                    const timer = ms => new Promise(res => setTimeout(res, ms)) // Returns a Promise that resolves after "ms" Milliseconds
                    let abort = false;
                    let j = 0;
                    const showDivs = () => {
                        skinDiv.classList.remove("hide");
                        skinBgDiv.classList.remove("hide-almost");
                    }
                    
                    // Automatic slideshow
                    async function slideShow () {
                        for (j = 0; j < skins.length; j++) {
                            if (abort === false) {
                                skinDiv.src = `${apiSplash + id}_${skins[j].num}.jpg`;
                                skinBgDiv.src = `${apiSplash + id}_${skins[j].num}.jpg`;
                                showDivs();
                                if (skins[j].name === "default") d.getElementById("champion-detail-skins-name").innerText = name;
                                else d.getElementById("champion-detail-skins-name").innerText = skins[j].name;

                                // Change the skin every 3 seconds with fade out effect
                                await timer(3000);
                                    if (abort === true) {
                                        showDivs();
                                        return;
                                    } else {
                                        skinDiv.classList.add("hide");
                                        skinBgDiv.classList.add("hide-almost");
                                        await timer(500);
                                    }
                            }
                            if (j  + 1 >= skins.length) j = -1; // Reset slideshow if it reached the end
                        }
                    }
                    slideShow();

                    // Reset the slideshow
                    d.getElementsByClassName("close-button")[0].addEventListener('click', () => {
                        abort = true;
                        j = 0;
                    });

                    // Lower font size if line break would occur
                    for (const div of d.querySelectorAll(".abilities-name")) {
                        // Sometimes randomly missing 1 block so using if condition
                        if (div.clientHeight <= 32) continue;
                            div.style.fontSize = "0.8rem";
                            div.style.whiteSpace = "nowrap";
                            if (d.body.clientWidth < 1650) div.style.fontSize = "0.7rem";
                    }
                                    
                    // Increment counter for the next click(champion)
                    this.setState({counter: counter + 1});
                });
            }
        }
        return(
            <ChampionMainPage cards = {this.state.cards}/>
        )
    }

}

export default ChampionData;