import React from 'react';

class ChampionCards extends React.Component {
    TogglePanel = () => {
        document.getElementById("champion-info-panel").style.display = "block";
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
    }
    render() {
        //eslint-disable-next-line
        String.prototype.capitalize = function() {
            return this.charAt(0).toUpperCase() + this.slice(1);
        }
    return([<div id="champion-container"/>,
        this.props.cards.map((champion, i) =>
            <div className = "champion-card non-selectable" id = {"champion-card-" + i} onClick = {this.TogglePanel}>
                <div className = "champion-loading">
                    <img src = {`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/` + champion.id + '_0.jpg'} alt="Loading Art"/>
                </div>
                <div className = "champion-card-name">{champion.name.toUpperCase()}
                    {/* <div className = "champion-card-title">{champion.title.capitalize()}</div> */}
                </div>
            </div>
        )
    ])
    }
}

export default ChampionCards;