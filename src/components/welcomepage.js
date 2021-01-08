import React from 'react';
import { gsap } from 'gsap';

class WelcomePage extends React.Component {
    ShowPage = () => {
        gsap.to("#welcome-container", {
            duration: 1.5,
            delay: 0.15,
            y: -1000,
            autoAlpha: 0,
            ease: "power3.out"
        })
        document.querySelector(".container").style.display = "inline-grid";
        document.getElementById("footer").style.display = "flex";
    }
    render() {
        document.addEventListener("DOMContentLoaded", () => {
            window.setTimeout(function() {
              document.getElementById("welcome-container").className = '';
            }, 100);
          });
    return(
        <div id = "welcome-container" className = "fade">
            <div id = "welcome-main-container">
                <div id = "welcome-text-container">
                    <span id = "welcome-text">Welcome to League Library!</span>
                    <span id = "welcome-description">League Library is a website based on League of Legends, a MOBA game made by Riot Games.<br></br>
                    <p id = "extra-line-phone" style = {{width: "100%"}}></p>
                    On this website you can freely browse your favorite characters and their information from the game! </span>
                </div>
                <div id = "enter-container">
                    <button id = "enter-button" onClick = {() => this.ShowPage()}>Enter</button>
                </div>
            </div>
            
        </div>
        )
    }
}

export default WelcomePage;