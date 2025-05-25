import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

const ChampionDetailPanel = () => {
  const panelRef = useRef(null);
  const b2tRef = useRef(null);
  const descFullRef = useRef(null);
  const descRef = useRef(null);
  const showBtnRef = useRef(null);
  const extraDetailRef = useRef(null);
  const videoRef = useRef(null);
  const namePhoneRef = useRef(null);
  const abilityDescRef = useRef(null);
  const abilityVidContRef = useRef(null);

  const timelineRef = useRef(gsap.timeline({ paused: true }));

  const ClosePanelAnimation = () => {
    gsap.to(panelRef.current, { duration: 0.25, y: '-=200', autoAlpha: 0 });
    gsap.to('.abilities-container', { translateY: 150, autoAlpha: 0 });
  };

  const ScrollAnim = () => {
    if (timelineRef.current.isActive()) return;
  
    timelineRef.current
      .clear()
      .to('.abilities-container', {
        translateY: 0,
        stagger: 0.15,
        duration: 1,
        autoAlpha: 1,
      })
      .play();
  };

  const OpenInfo = () => {
    descFullRef.current.style.display = 'contents';
    descRef.current.style.display = 'none';
    showBtnRef.current.style.display = 'none';
  };

  const ResetInfo = () => {
    document.title = 'League Library';
    document.body.style.overflow = 'auto';
    panelRef.current.scrollTop = 0;

    descFullRef.current.style.display = 'none';
    descRef.current.style.display = 'block';
    showBtnRef.current.style.display = 'block';
    extraDetailRef.current.style.display = 'none';

    videoRef.current?.pause();
    namePhoneRef.current.style.opacity = '0';

    const abilityNames = panelRef.current.querySelectorAll('.abilities-name');
    abilityNames.forEach(el => {
      el.style.fontSize = '1.2rem';
      el.style.whiteSpace = 'normal';
    });
  };

  const ExtraPanelAnim = () => {
    gsap.to(abilityDescRef.current, { x: 0, duration: 1, autoAlpha: 1 });
    gsap.to(abilityVidContRef.current, { x: 0, duration: 1, autoAlpha: 1 });
  };

  const MouseLeave = () => {
    gsap.to(abilityDescRef.current, { x: '-=100', duration: 0.5, autoAlpha: 0 });
    gsap.to(abilityVidContRef.current, { x: '+=100', duration: 0.5, autoAlpha: 0 });
  };

  const AbilityNameDivPhone = () => {
    gsap.to(namePhoneRef.current, {
      duration: 1.5,
      autoAlpha: 1,
      display: 'flex',
    });
  };

  const BackToTop = () => {
    const panel = panelRef.current;
    const b2t = b2tRef.current;

    if (panel.scrollTop > 300) {
      b2t.style.opacity = '1';
    } else {
      b2t.style.opacity = '0';
    }

    const handleClick = () => {
      panel.scrollTo({ top: 0, behavior: 'smooth' });
    };

    b2t.removeEventListener('click', handleClick); 
    b2t.addEventListener('click', handleClick);
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
    }, panelRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={panelRef}
      id="champion-info-panel"
      data-testid="info-panel"
      style={{ display: 'none' }}
      onScroll={() => {
        ScrollAnim();
        BackToTop();
      }}
    >
      <button id="b2tPanel" ref={b2tRef}>
        <img
          src="https://i.gyazo.com/8fde68144b0fe90786b9472cdcad77f1.png"
          srcSet="https://i.gyazo.com/8fde68144b0fe90786b9472cdcad77f1.png, https://i.gyazo.com/25bca84d684ddfe5d7dd4aaec54f92e6.png"
          alt="Scroll To The Top"
          id="b2tPanel-img"
        />
      </button>
      <button
        className="close-button"
        onClick={() => {
          ClosePanelAnimation();
          ResetInfo();
          MouseLeave();
        }}
      >
        X
      </button>
      <div id="champion-detail-image" className="non-selectable">
        <img id="champBgImg" alt="Splash Art Background" />
        <img id="champImg" alt="Splash Art" />
      </div>
      <div id="champion-detail-name" />
      <div id="champion-detail-title" />
      <div id="champion-detail-description-container">
        <span id="champion-detail-description" ref={descRef}></span>
        <button onClick={()=> OpenInfo()} id="showBtn" ref={showBtnRef}>
          Show more...
        </button>
        <span
          id="champion-detail-description-full"
          style={{ display: 'none' }}
          ref={descFullRef}
        ></span>
      </div>
        <div id="champion-detail-abilities-container">
          <span id="abilities-text">Abilities</span>
          <div id="champion-detail-abilities-qwer-container">
            <div
              id="champion-detail-abilities-p-container"
              className="abilities-container"
              onMouseEnter={() => ExtraPanelAnim()}
              onClick={() => AbilityNameDivPhone()}
            >
              <img 
                id="champion-detail-abilities-p" 
                alt="Passive ability"
                className="champion-detail-ability"
                 />
              <span 
              id="champion-detail-abilities-p-name"
               className="abilities-name"
               ></span>
            </div>
            <div
              id="champion-detail-abilities-q-container"
              className="abilities-container"
              onMouseEnter={() => ExtraPanelAnim()}
              onClick={() => AbilityNameDivPhone()}
            >
              <img id="champion-detail-abilities-q" alt="Q ability" className="champion-detail-ability" />
              <span id="champion-detail-abilities-q-name" className="abilities-name"></span>
            </div>
            <div
              id="champion-detail-abilities-w-container"
              className="abilities-container"
              onMouseEnter={() => ExtraPanelAnim()}
              onClick={() => AbilityNameDivPhone()}
            >
              <img id="champion-detail-abilities-w" alt="W ability" className="champion-detail-ability" />
              <span id="champion-detail-abilities-w-name" className="abilities-name"></span>
            </div>
            <div
              id="champion-detail-abilities-e-container"
              className="abilities-container"
              onMouseEnter={() => ExtraPanelAnim()}
              onClick={() => AbilityNameDivPhone()}
            >
              <img id="champion-detail-abilities-e" alt="E ability" className="champion-detail-ability" />
              <span id="champion-detail-abilities-e-name" className="abilities-name"></span>
            </div>
            <div
              id="champion-detail-abilities-r-container"
              className="abilities-container"
              onMouseEnter={() => ExtraPanelAnim()}
              onClick={() => AbilityNameDivPhone()}
            >
              <img id="champion-detail-abilities-r" alt="R ability" className="champion-detail-ability" />
              <span id="champion-detail-abilities-r-name" className="abilities-name"></span>
          </div>
        </div>
        <div id="champion-detail-ability-name-phone-container" ref={namePhoneRef}>
          <span id="champion-detail-ability-name-phone" className="abilities-name" />
        </div>
        <div id="champion-detail-abilities-extra-detail-container" ref={extraDetailRef}>
          <div id="champion-detail-abilities-description" ref={abilityDescRef} />
          <div id="champion-detail-abilities-video-container" ref={abilityVidContRef}>
            <video
              autoPlay={true}
              loop={true}
              muted={true}
              controls
              id="champion-detail-abilities-video"
              className="champion-detail-abilities-videos"
              ref={videoRef}
            >
              <source
                id="champion-detail-abilities-video-source-webm"
                className="champion-detail-abilities-videos"
                type="video/webm"
              />
            </video>
          </div>
        </div>
      </div>
      <div id="champion-detail-skins-container">
        <span id="skins-text">Skins</span>
        <div id="champion-detail-skins-image-main-container">
          <div id="champion-detail-skins-image-container">
            <img id="champSkinsImg" className="non-selectable" alt="Skin Splash Art" />
            <img id="champSkinsBgImg" className="non-selectable" alt="Skin Splash Art Background" />
            <div id="slideShowEnd" className="non-selectable hide">
              {/* <div id = "endTextContainer"></div> */}
            </div>
            <div id="champion-detail-skins-name-container">
              <span id="champion-detail-skins-name" className="non-selectable"></span>
            </div>
          </div>

          <div id="button-container">
            <button className="prev">❮</button>
            <button className="next">❯</button>
          </div>
        </div>
      </div>
    s</div>
  );
};

export default ChampionDetailPanel;
