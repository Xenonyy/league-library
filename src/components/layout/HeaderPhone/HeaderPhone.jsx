import { useRef, useState } from 'react';

const HeaderPhone = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <>
      <div id="header-menu" className={menuOpen ? 'animation' : 'hidden'} ref={menuRef}>
        <div id="contact-phone">
          <div id="project-link-container">
            <div id="src-code-container">
              <p className="link-text">View the project's source code here:</p>
              <a
                href="https://github.com/Xenonyy/league-library"
                style={{ fontSize: '1.5rem', textDecoration: 'underline', padding: '1em', zIndex: '10' }}
              >
                GitHub
              </a>
            </div>
            <div id="contact-container">
              <p className="link-text" style={{ color: 'coral', fontSize: '2rem' }}>
                Contact Me
              </p>
              <a href="tel:+31687320230" className="header-phone-personal-link">
                +31 687 320230
              </a>
              <a
                href="mailto:gonda.armand@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="header-phone-personal-link"
              >
                gonda.armand@gmail.com
              </a>
            </div>
          </div>
          <div id="header-phone-github">
            <a
              href="https://github.com/Xenonyy"
              style={{
                width: '50px',
                height: '50px',
                display: 'flex',
                zIndex: 2,
                position: 'relative',
                filter: 'invert(1)',
              }}
            >
              <img
                src="../../github.webp"
                alt="github"
                id="github-phone-icon"
                width="128"
                height="128"
                className="phone-icon non-selectable"
              />
            </a>
            <p className="link-text">GitHub</p>
          </div>
          <div id="header-phone-linkedin">
            <a
              href="https://www.linkedin.com/in/armand-gonda"
              style={{ width: '50px', height: '50px', display: 'flex', zIndex: 2, position: 'relative' }}
            >
              <img
                src="../../linkedin.webp"
                alt="linkedin"
                id="linkedin-phone-icon"
                width="128"
                height="128"
                className="phone-icon non-selectable"
              />
            </a>
            <p className="link-text">LinkedIn</p>
          </div>
          <p id="header-phone-copyright">&copy; 2025 Gonda Armand</p>
        </div>
      </div>
      <header id="header-phone">
        <div id="header-phone-container">
          <div id="header-phone-icon" className="non-selectable">
            <img
              src="../../header-icon-transparent.webp"
              alt="league"
              id="league-phone-icon"
              width="128"
              height="128"
              className="phone-icon non-selectable"
            />
            <div id="header-phone-text">League Library</div>
          </div>
          <div id="menu-toggle" onClick={toggleMenu} className={menuOpen ? 'open' : ''}>
            <div id="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div id="cross">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderPhone;
