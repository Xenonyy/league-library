import React, { useEffect, useState } from 'react';
import {ChampionAPI} from "../../api/champions";
import ChampionDetailPanel from './ChampionDetailPanel';
import ChampionMainPage from './ChampionMainPage';
import Skins from './ChampionSkins';

const d = document,
    version = "10.25.1",
    cdn = "http://ddragon.leagueoflegends.com/cdn/",
    apiSpell = `${cdn + version}/img/spell/`,
    apiPassive = `${cdn + version}/img/passive/`,
    apiSpellImg = "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0",
    apiSplash = `${cdn}img/champion/splash/`;


function Fetch() {
    const [ cards, setCards ] = useState([]);
    const [ AllData, setAllData ] = useState([]);
    // const [ championdata, setchampiondata ] = useState({});

    const getCards = async() => {
        const response = await fetch(ChampionAPI);
        const json = await response.json();
        Object.keys(json.data).forEach(key => {
            cards.push(json.data[key]);
        });
        setCards(cards)
        console.log(cards)
    }
    getCards();
    useEffect(() => {
        window.onload = () => { // cards [] empty without this and wont run the code below at all
                const skinDiv = d.getElementById("champSkinsImg"),
                    skinBgDiv = d.getElementById("champSkinsBgImg");
            const data = async () => {
                for (const [x, card] of Object.entries(cards)) {
                    const response = await fetch(`${cdn + version}/data/en_US/champion/${card.id}.json`);
                    const json = await response.json();
                    Object.keys(json.data).forEach(key => {
                        AllData.push(json.data[key]);
                    })
                setAllData(AllData)
                    const champion = {
                        name: AllData[x].name,
                        id: AllData[x].id,
                        title: AllData[x].title,
                        key: AllData[x].key,
                        skins: AllData[x].skins,
                        blurb: AllData[x].blurb,
                        lore: AllData[x].lore,
                        spell: AllData[x].spells,
                    };
                    const { name, id, title, key, skins, blurb, lore, spell } = champion;

                    
                    d.querySelector(`#champion-card-${x}`).addEventListener('click', async() => {
                        console.log(...name)
                        d.getElementsByTagName("title")[0].innerText = `${name} - ${title}`;
                        d.getElementById("champBgImg").src = `${apiSplash + id}_0.jpg`;
                        d.getElementById("champImg").src = `${apiSplash + id}_0.jpg`;
                        d.getElementById("champion-detail-name").innerText = name;
                        d.getElementById("champion-detail-title").innerText = title;

                    
                    // // Slideshow of skins
                    const timer = ms => new Promise(res => setTimeout(res, ms)) // Returns a Promise that resolves after "ms" Milliseconds
                    let abort = false;
                    let j = 0;
                    // Manual toggle
                    d.getElementsByClassName("prev")[0].addEventListener("click", () => {
                        abort = true;
                        console.log(j, skins.length)
                        if (j <= 0) {
                            return;
                        } else {
                            skinDiv.classList.remove("hide");
                            skinBgDiv.classList.remove("hide");
                            skinDiv.src = `${apiSplash + id}_${skins[j - 1].num}.jpg`;
                            skinBgDiv.src = `${apiSplash + id}_${skins[j - 1].num}.jpg`;
                            d.getElementById("champion-detail-skins-name").innerText = skins[j - 1].name;
                            if (skins[j - 1].name === "default") d.getElementById("champion-detail-skins-name").innerText = name;
                            j--;
                        }
                    })
                    d.getElementsByClassName("next")[0].addEventListener("click", () => {
                        abort = true;
                        console.log(j, skins.length)
                        if (j + 1 >= skins.length) {
                            return;
                        } else {
                            skinDiv.classList.remove("hide");
                            skinBgDiv.classList.remove("hide");
                            skinDiv.src = `${apiSplash + id}_${skins[j + 1].num}.jpg`;
                            skinBgDiv.src = `${apiSplash + id}_${skins[j + 1].num}.jpg`;
                            d.getElementById("champion-detail-skins-name").innerText = skins[j + 1].name;
                            if (skins[j + 1].name === "default") d.getElementById("champion-detail-skins-name").innerText = name;
                            j++;
                        }
                    })
                    // Automatic slideshow
                    async function slideShow () {
                        for (j = 0; j < skins.length; j++) {
                            if (abort === false) {
                                skinDiv.src = `${apiSplash + id}_${skins[j].num}.jpg`;
                                skinBgDiv.src = `${apiSplash + id}_${skins[j].num}.jpg`;
                                skinDiv.classList.remove("hide");
                                skinBgDiv.classList.remove("hide");
                                if (skins[j].name === "default") d.getElementById("champion-detail-skins-name").innerText = name;
                                else d.getElementById("champion-detail-skins-name").innerText = skins[j].name;

                                // Change the skins every 3 seconds with fade out effect
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
                            if (j >= skins.length) {
                                skinDiv.classList.remove("hide");
                                skinBgDiv.classList.remove("hide");
                                skinDiv.src = `${apiSplash + id}_0.jpg`;
                                skinBgDiv.src = `${apiSplash + id}_0.jpg`;
                                d.getElementById("champion-detail-skins-name").innerText = name;
                            }
                        }
                    }
                    slideShow();
                    d.getElementsByClassName("close-button")[0].addEventListener('click', () => {
                        abort = true;
                        j = 0;
                        // Proof of bug(click multiple champions to see)
                        console.log(name)
                    })
                    

                    })

                }
            }
            data();
        }
    })
    return ([
        <ChampionMainPage key = {0.1}/>,
        <ChampionDetailPanel key = {0.2}/>,
        // <Skins key = {0.3}/>
    ])
}

export default Fetch;