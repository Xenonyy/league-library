import React from 'react';

class HeaderPhone extends React.Component {
    MenuAnimation = () => {
        const menu = document.getElementById("menu-toggle");
        const header_menu = document.getElementById("header-menu");
            menu.classList.toggle('open');
            header_menu.classList.toggle('hidden');
            header_menu.classList.toggle('animation');
    }
    render() {
    return([
        <div id = "header-menu" className = "hidden" key = {"header-menu"}>
            <div id = "contact-phone">
                <div id = "project-link-container">
                    <div id = "src-code-container">
                        <p className = "link-text" style = {{fontSize: "1rem"}}>View the project's source code here:</p>
                        <a href = "https://github.com/Xenonyy/league-library" style = {{fontSize: "1.2rem", textDecoration: "underline"}}>GitHub</a>
                    </div>
                    <div id = "contact-container">
                        <p className = "link-text" style = {{color: "coral", fontSize: "1.6rem", textDecoration: "underline"}}>Contact Me</p>
                        <p className = "link-text">+36 20 332 3215</p>
                        <p className = "link-text">gonda.armand@gmail.com</p>
                    </div>
                </div>
                <div id = "header-phone-github">
                    <a href = "https://github.com/Xenonyy" style = {{width: "40px", height: "40px", display: "flex"}}>
                        <img src = "../../github.webp" alt = "github" id = "github-phone-icon" width = "128" height = "128" className = "phone-icon non-selectable"></img>
                    </a>
                    {/* <p className = "link-text">GitHub</p> */}
                </div>
                <div id = "header-phone-linkedin">
                    <a href = "https://www.linkedin.com/in/armand-gonda-a72125205/" style = {{width: "40px", height: "40px", display: "flex"}}>
                        <img src = "../../linkedin.webp" alt = "linkedin" id = "linkedin-phone-icon" width = "128" height = "128" className = "phone-icon non-selectable"></img>
                    </a>
                    {/* <p className = "link-text">LinkedIn</p> */}
                </div>
                <p id = "header-phone-copyright">&copy; 2021 Gonda Armand</p>
            </div>
        </div>,
        <header id = "header-phone" key = {"header-phone"}>
            <div id = "header-phone-container">
                <div id = "header-phone-icon" className = "non-selectable">
                    <img src = "../../header-icon-transparent.webp"  alt = "league" id = "league-phone-icon" width = "128" height = "128" className = "phone-icon non-selectable"></img>
                    <div id = "header-phone-text">League Library</div>
                </div>
                <div id = "menu-toggle" onClick = {() => this.MenuAnimation()}>
                    <div id = "hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div id = "cross">
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </header>
    ])
    }
}

export default HeaderPhone;