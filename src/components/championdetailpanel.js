import React from 'react';
import { gsap } from "gsap";
// import { ScrollTrigger } from 'gsap/all';

class ChampionDetailPanel extends React.Component {
    t1 = gsap.timeline({})
    nameDiv = document.getElementsByClassName("abilities-name");

    ClosePanelAnimation = () => {
        gsap.to("#champion-info-panel", { duration: 0.25, y: "-=200", autoAlpha: 0 })
        // Using loop to make sure it resets the value if the animation is still playing (kind of working)
        for (let i = 0; i < 10; i++) {
            gsap.to(".abilities-container", { translateY: 150, autoAlpha: 0 })
        }
    }
    ScrollAnim = () => {
        // gsap.registerPlugin(ScrollTrigger);
        this.t1.resume()
        this.t1.to(".abilities-container", {
            // scrollTrigger: {
            //     trigger: "#champion-abilities-qwer-container",
            //     toggleActions: "restart pause pause pause"
            // },
            translateY: 0,
            stagger: 0.15,
            duration: 1,
            autoAlpha: 1
        })
        this.t1.addPause()
    }
    OpenInfo = () => {
        document.getElementById("champion-detail-description-full").style.display = "contents";
        document.getElementById("champion-detail-description").style.display = "none";
        document.getElementById("showBtn").style.display = "none";
    }
    ResetInfo = () => {
        document.getElementsByTagName("title")[0].innerText = "League Library";
        document.getElementsByTagName("body")[0].style.overflow = "auto";
        document.getElementById("champion-info-panel").scrollTop = 0;
        document.getElementById("champion-detail-description-full").style.display = "none";
        document.getElementById("champion-detail-description").style.display = "block";
        document.getElementById("showBtn").style.display = "block";
        document.getElementById("champion-detail-abilities-extra-detail-container").style.display = "none";
        document.getElementById("champion-detail-abilities-video").pause();
        document.getElementById("champion-detail-ability-name-phone-container").style.opacity = "0";
        for (let i = 0; i < this.nameDiv.length; i++) {
            this.nameDiv[i].style.fontSize = "1.2rem";
            this.nameDiv[i].style.whiteSpace = "normal";
        }
    }
    ExtraPanelAnim = () => {
        gsap.to("#champion-detail-abilities-description", {
            x: 0,
            duration: 1,
            autoAlpha: 1
        })
        gsap.to("#champion-detail-abilities-video-container", {
            x: 0,
            duration: 1,
            autoAlpha: 1
        })
    }
    MouseLeave = () => {
        gsap.to("#champion-detail-abilities-description", { 
            x: "-=200",
            duration: 0.5,
            autoAlpha: 0
        })
        gsap.to("#champion-detail-abilities-video-container", {
            x: "+=200",
            duration: 0.5,
            autoAlpha: 0
        })
    }
    AbilityNameDivPhone = () => {
        gsap.to("#champion-detail-ability-name-phone-container", {
            duration: 1.5,
            autoAlpha: 1,
            display: "flex"
        })
    }
    render() {
        return(
            <div id ="champion-info-panel" style = {{display: "none"}} onScroll = { () => {this.ScrollAnim();}}>
                <button className = "close-button" onClick = {() => {this.ClosePanelAnimation(); this.ResetInfo(); this.MouseLeave()}}>X</button>
                <div id = "champion-detail-image" className = "non-selectable">
                    <img id = "champBgImg" alt = "Background Splash"/>
                    <img id = "champImg" alt = "Splash Art"/>
                </div>
                <div id = "champion-detail-name"/>
                <div id = "champion-detail-title"/>
                <div id = "champion-detail-description-container">
                    <span id = "champion-detail-description"></span>
                    <button onClick = {this.OpenInfo} id = "showBtn">Show more...</button>
                    <span id = "champion-detail-description-full" style = {{display: "none"}}></span>
                </div>
                <div id = "champion-detail-abilities-container">
                    <span id = "abilities-text">Abilities</span>
                    <div id = "champion-detail-abilities-qwer-container">
                        <div id = "champion-detail-abilities-p-container" className = "abilities-container" onMouseEnter = {() => this.ExtraPanelAnim()} onClick = {() => this.AbilityNameDivPhone()}>
                            <img id = "champion-detail-abilities-p" alt = "Passive ability" className = "champion-detail-ability"/>
                            <span id = "champion-detail-abilities-p-name" className = "abilities-name"></span>
                        </div>
                        <div id = "champion-detail-abilities-q-container" className = "abilities-container" onMouseEnter = {() => this.ExtraPanelAnim()} onClick = {() => this.AbilityNameDivPhone()}>
                            <img id = "champion-detail-abilities-q" alt = "Q ability" className = "champion-detail-ability"/>
                            <span id = "champion-detail-abilities-q-name" className = "abilities-name"></span>
                        </div>
                        <div id = "champion-detail-abilities-w-container" className = "abilities-container" onMouseEnter = {() => this.ExtraPanelAnim()} onClick = {() => this.AbilityNameDivPhone()}>
                            <img id = "champion-detail-abilities-w" alt = "W ability" className = "champion-detail-ability"/>
                            <span id = "champion-detail-abilities-w-name" className = "abilities-name"></span>
                        </div>
                        <div id = "champion-detail-abilities-e-container" className = "abilities-container" onMouseEnter = {() => this.ExtraPanelAnim()} onClick = {() => this.AbilityNameDivPhone()}>
                            <img id = "champion-detail-abilities-e" alt = "E ability" className = "champion-detail-ability"/>
                            <span id = "champion-detail-abilities-e-name" className = "abilities-name"></span>
                        </div>
                        <div id = "champion-detail-abilities-r-container" className = "abilities-container" onMouseEnter = {() => this.ExtraPanelAnim()} onClick = {() => this.AbilityNameDivPhone()}>
                            <img id = "champion-detail-abilities-r" alt = "R ability" className = "champion-detail-ability"/>
                            <span id = "champion-detail-abilities-r-name" className = "abilities-name"></span>
                        </div>
                    </div>
                    <div id = "champion-detail-ability-name-phone-container">
                        <span id = "champion-detail-ability-name-phone" className = "abilities-name"/>
                    </div>
                    <div id = "champion-detail-abilities-extra-detail-container">
                        <div id = "champion-detail-abilities-description"/>
                        <div id = "champion-detail-abilities-video-container">
                            <video autoPlay = {true} loop = {true} muted = {true} controls id = "champion-detail-abilities-video" className = "champion-detail-abilities-videos">
                                <source id = "champion-detail-abilities-video-source-webm" className = "champion-detail-abilities-videos" type="video/webm"/>
                            </video>
                        </div>
                    </div>
                </div>
                <div id = "champion-detail-skins-container">
                    <span id = "skins-text">Skins</span>
                    <div id ="champion-detail-skins-image-main-container">
                        <div id = "champion-detail-skins-image-container">
                            <img id = "champSkinsImg" alt = "Skin Splash Art"/>
                            <img id = "champSkinsBgImg" alt = "Skin Splash Art Background"/>
                        </div>
                        <div id = "champion-detail-skins-name-container">
                            <span id = "champion-detail-skins-name" className = "non-selectable"></span>
                        </div>
                        <div id = "button-container">
                            <button className = "prev">❮</button>
                            <button className = "next">❯</button>
                        </div>
                        
                    </div>
                        
                </div>
            </div>
        )
    }
}

export default ChampionDetailPanel;