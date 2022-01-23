import React from 'react';
import { gsap } from "gsap";

class ChampionMainPage extends React.Component {
    TogglePanel = () => {
        gsap.to("body", { overflow: "hidden", delay: 0.15, duration: 0.5});
        gsap.to('#champion-info-panel', {
            duration: 0.75,
            display: "block",
            autoAlpha: 1,
            y: 0,
            delay: 0.15,
            ease: "power3.out"
        });
    }
    render() {
        // eslint-disable-next-line
        String.prototype.capitalize = function() { return this.charAt(0).toUpperCase() + this.slice(1)};
        return([
            this.props.cards.map((champion, i) =>
                <div key = {i} className = "champion-card non-selectable" id = {`champion-card-${i}`} onClick = {() => {this.TogglePanel();}}>
                    <div className = "champion-loading">
                        <img data-testid = "champion-images" src = {`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`} alt = "Champion Splash Art" className = "champion-card-image" />
                    </div>
                    <div className = "champion-card-name">{champion.name.toUpperCase()}
                        {/* <div className = "champion-card-title">{champion.title.capitalize()}</div> */}
                    </div>
                </div>
            )
        ])
    }
}

export default ChampionMainPage;