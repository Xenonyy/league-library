import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import useIsMobile from '../../../hooks/useIsMobile';

const WelcomePage = ({ onFinish }) => {
  const containerRef = useRef(null);

  const handleEnter = () => {
    if (!containerRef.current) return;

    gsap.to(containerRef.current, {
      duration: 0.5,
      y: useIsMobile ? -700 : -1200,
      autoAlpha: 0,

      onComplete: () => {
        onFinish?.();
      },
    });
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div
      id="welcome-container"
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 9999 }}
      ref={containerRef}
    >
      <section id="welcome-main-container">
        <header id="welcome-text-container">
          <h1 id="welcome-text">Welcome to League Library!</h1>
          <p id="welcome-description">
            League Library is a web app based on League of Legends, a MOBA game made by Riot Games.
            <br />
            On this website you can freely browse all the characters and their lore, abilities, and skins from the game!
            <br />
            This website has no affiliation with Riot Games. All assets belong to Riot Games.
          </p>
        </header>
        <div id="enter-container">
          <button type="button" id="enter-button" data-testid="pagebtn" onClick={handleEnter}>
            Enter
          </button>
        </div>
      </section>
    </div>
  );
};

export default WelcomePage;
