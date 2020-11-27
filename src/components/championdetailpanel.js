import React from 'react';

class ChampionDetailPanel extends React.Component {
    ClosePanel = () => {
        document.getElementById("champion-info-panel").style.display = "none";
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
    }
    render() {
        return(
            <div id ="champion-info-panel" style = {{display: "none"}}>
                <button className = "close-button" onClick = {() => {this.ResetInfo(); this.ClosePanel()}}>X</button>
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
                        <div id = "champion-detail-abilities-p-container" className = "abilities-container">
                            <img id = "champion-detail-abilities-p" alt = "Passive ability" className = "champion-detail-ability"/>
                            <span id = "champion-detail-abilities-p-name" className = "abilities-name"></span>
                        </div>
                        <div id = "champion-detail-abilities-q-container" className = "abilities-container">
                            <img id = "champion-detail-abilities-q" alt = "Q ability" className = "champion-detail-ability"/>
                            <span id = "champion-detail-abilities-q-name" className = "abilities-name"></span>
                        </div>
                        <div id = "champion-detail-abilities-w-container" className = "abilities-container">
                            <img id = "champion-detail-abilities-w" alt = "W ability" className = "champion-detail-ability"/>
                            <span id = "champion-detail-abilities-w-name" className = "abilities-name"></span>
                        </div>
                        <div id = "champion-detail-abilities-e-container" className = "abilities-container">
                            <img id = "champion-detail-abilities-e" alt = "E ability" className = "champion-detail-ability"/>
                            <span id = "champion-detail-abilities-e-name" className = "abilities-name"></span>
                        </div>
                        <div id = "champion-detail-abilities-r-container" className = "abilities-container">
                            <img id = "champion-detail-abilities-r" alt = "R ability" className = "champion-detail-ability"/>
                            <span id = "champion-detail-abilities-r-name" className = "abilities-name"></span>
                        </div>
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
            </div>
        )
    }
}

export default ChampionDetailPanel;