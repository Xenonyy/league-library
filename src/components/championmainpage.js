import React from 'react';
import { gsap } from "gsap";

class ChampionCards extends React.Component {
    TogglePanel = () => {
        gsap.to("body", { overflow: "hidden", delay: 0.25, duration: 1.5})
        gsap.to("#champion-info-panel", { display: "block" })
        // document.getElementById("champion-info-panel").style.display = "block"s;
        // document.getElementsByTagName("body")[0].style.overflow = "hidden";
    }
    anim = () => {
        gsap.to('#champion-info-panel', {
            duration: 1.5,
            autoAlpha: 1,
            y: 0,
            delay: 0.25,
            ease: "expo.out"
        });
    }
    render() {
        //eslint-disable-next-line
        String.prototype.capitalize = function() {
            return this.charAt(0).toUpperCase() + this.slice(1);
        }
    return([
        this.props.cards.map((champion, i) =>
            <div className = "champion-card non-selectable" id = {"champion-card-" + i} onClick = {() => {this.TogglePanel(); this.anim()}}>
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