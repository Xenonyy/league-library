import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div id="header-container">
          <div id="header-icon" className="non-selectable">
            <img
              src="../../header-icon-transparent.webp"
              alt="league-icon"
            ></img>
            <div id="header-text">League Library</div>
          </div>
          <div id="header-email">
            gonda.armand@gmail.com
            <img
              src="../../email.webp"
              alt="email-icon"
              id="email-icon"
              className="non-selectable"
            ></img>
            {/* <img src = "https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt = "email-icon" id = "email-icon"></img> */}
          </div>
          <div id="header-github">
            <img
              src="../../github.webp"
              alt="github-icon"
              id="github-icon"
              className="non-selectable"
            ></img>
            <a
              href="https://github.com/Xenonyy"
              style={{ position: 'absolute', screenLeft: '4em' }}
            >
              Xenonyy
            </a>
          </div>
          <div id="header-dropdown">
            <button className="dropbtn">▼</button>
            <div className="dropdown-content">
              <a href="https://github.com/Xenonyy/league-library">
                View this specific project's repository.
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
