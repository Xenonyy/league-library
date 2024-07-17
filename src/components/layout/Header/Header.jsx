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
          <div id="header-personal-info">
            <div id="header-email">
              <img
                src="../../email.webp"
                alt="email-icon"
                id="email-icon"
                className="non-selectable"
              ></img>
              <a
                href="mailto:gonda.armand@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="header-personal-link"
              >
                gonda.armand@gmail.com
              </a>
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
                rel="noopener noreferrer"
                target="_blank"
                className="header-personal-link"
              >
                Xenonyy
              </a>
            </div>
            <div id="header-dropdown">
              <button className="dropbtn">▼</button>
              <div className="dropdown-content">
                <a
                  href="https://github.com/Xenonyy/league-library"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  View this specific project's repository.
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
