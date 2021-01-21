import React, { useState } from 'react';
import { ChampionAPI } from '../../api/champions';

function FetchData() {
    const [ cards, setCards ] = useState([]);

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
    
    return (
        <div id= "ok">
            <button onClick = {()=> setCards(cards)} ></button>
        </div>,
        cards.map((i) =>
        <div id = {`fetch${i}`}>
            <p>Here's {cards[i].name}</p>
        </div>
        )
        
    )
}
export default FetchData;