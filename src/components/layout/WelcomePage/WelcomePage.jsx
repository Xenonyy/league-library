import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { isMobile } from '../Header/ConditionalHeader';

const WelcomePage = () => {
  const containerRef = useRef(null);
  const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.classList.remove('fade');
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  const handleEnter = () => {
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        duration: 1.5,
        delay: 0.15,
        y: isMobile ? -950 : -1400,
        autoAlpha: 0,
        ease: 'power3.out',
        onComplete: () => {
          setShowMainContent(true);
        },
      });
    }
    document.querySelector(".container").style.display = "inline-grid";
    document.querySelector("#footer").style.display = "flex";
  };

  return (
    !showMainContent && (
      <div id="welcome-container" data-testid="welcome" className="fade" ref={containerRef}>
        <div id="welcome-main-container">
          <div id="welcome-text-container">
            <span id="welcome-text">Welcome to League Library!</span>
            <span id="welcome-description">
              League Library is a web app based on League of Legends, a MOBA game made by Riot Games.
              <br />
              <p id="extra-line-phone" style={{ width: '100%' }}></p>
              On this website you can freely browse all the characters and their information from the game!
              <br />
              This website has no affiliation with Riot Games. All assets belong to Riot Games.
            </span>
          </div>
          <div id="enter-container">
            <button type="button" id="enter-button" data-testid="pagebtn" onClick={handleEnter}>
              Enter
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default WelcomePage;
