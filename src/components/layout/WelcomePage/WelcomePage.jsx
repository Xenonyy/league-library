import React from 'react';
import { gsap } from 'gsap';
import { isMobile } from '../Header/ConditionalHeader';

class WelcomePage extends React.Component {
    ShowPage = () => {
        gsap.to("#welcome-container", {
            duration: 1.5,
            delay: 0.15,
            y: isMobile ? -950 : -1400,
            autoAlpha: 0,
            ease: "power3.out"
        });
        document.querySelector(".container").style.display = "inline-grid";
        document.querySelector("#footer").style.display = "flex";
    }
    render() {
        document.addEventListener("DOMContentLoaded", () => {
            window.setTimeout(() => {
                document.querySelector("#welcome-container").className = '';
            }, 100);
        });
    return(
        <div id = "welcome-container" data-testid = "welcome" className = "fade">
            <div id = "welcome-main-container">
                <div id = "welcome-text-container">
                    <span id = "welcome-text">Welcome to League Library!</span>
                    <span id = "welcome-description">League Library is a web app based on League of Legends, a MOBA game made by Riot Games.<br></br>
                        <p id = "extra-line-phone" style = {{width: "100%"}}></p>
                        On this website you can freely browse all the characters and their information from the game! <br/>
                        This website has no affiliation with Riot Games. All assets belong to Riot Games.
                    </span>
                </div>
                <div id = "enter-container">
                    <button type = "button" id = "enter-button" data-testid = "pagebtn" onClick = {() => this.ShowPage()}>Enter</button>
                </div>
            </div>
            
        </div>
        )
    }
}

export default WelcomePage;