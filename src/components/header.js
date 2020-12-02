import React from 'react';

class Header extends React.Component {
    render() {
    return(
        <header className = "header">
            <div id = "header-icon">
                <img src = "https://i.gyazo.com/e3f99f53992a9a36f7a0e110ceedd75c.png"  alt = "league-icon"></img>
            </div>
            <div id = "header-email">gonda.armand@gmail.com
                <img src = "https://i.gyazo.com/225151653b3915372e6bba191222b7f7.png" alt = "email-icon" id = "email-icon"></img>
                {/* <img src = "https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt = "email-icon" id = "email-icon"></img> */}
            </div>
            <div id = "header-github">
                <img src = "https://i.gyazo.com/833f2c714bb26d16b8057f18cd6cc5f0.png" alt = "github-icon" id = "github-icon"></img>
                <a href = "https://github.com/Xenonyy" style = {{position: "absolute"}}>Xenonyy</a>
            </div>
            <div id = "header-dropdown">
                    <button className = "dropbtn">▼</button>
                    <div className = "dropdown-content">
                        <a href = "https://github.com/Xenonyy/league-library">View this specific project's repository.</a>
                    </div>
                </div>
            <div id = "header-text">League Library</div>
        </header>
        )
    }
}

export default Header;