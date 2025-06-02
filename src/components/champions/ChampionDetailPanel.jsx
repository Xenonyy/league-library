import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Version } from '../../enums/version';

const version = Version.PATCH;
const cdn = 'https://ddragon.leagueoflegends.com/cdn/';

const ChampionDetailPanelComponent = ({ champion, onClose }) => {
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

  const [skinIndex, setSkinIndex] = useState(0);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [hoveredAbility, setHoveredAbility] = useState(null);
  const [activeAbility, setActiveAbility] = useState(null);

  const isPanelOpen = champion !== null;

  useEffect(() => {
    if (isPanelOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isPanelOpen]);

  const ChampionKeyVideo = (championKey, abilityKey) => {
    let correctKey = '0';
    if (championKey.length === 3) {
      correctKey = '0';
    } else if (championKey.length === 2) {
      correctKey = '00';
    } else if (championKey.length === 1) {
      correctKey = '000';
    }
    const baseURL = 'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/';
    return `${baseURL}${correctKey}${championKey}/ability_${correctKey}${championKey}_${abilityKey}1.webm`;
  };

  const defaultSkinImgUrl = champion?.skins?.[skinIndex]
    ? `${cdn}img/champion/splash/${champion.id}_${champion.skins[0].num}.jpg`
    : '';
  const skinImgUrl = champion?.skins?.[skinIndex]
    ? `${cdn}img/champion/splash/${champion.id}_${champion.skins[skinIndex].num}.jpg`
    : '';

  useEffect(() => {
    if (!champion?.skins?.length) return;

    let isMounted = true;
    let timeoutId;

    const cycleSkins = () => {
      timeoutId = setTimeout(() => {
        if (isMounted) {
          setSkinIndex(prev => (prev + 1) % champion.skins.length);
          cycleSkins();
        }
      }, 3000);
    };

    cycleSkins();

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, [champion?.skins?.length]);

  useEffect(() => {
    if (!panelRef.current) return;
    gsap.fromTo(panelRef.current, { autoAlpha: 0, y: -200 }, { autoAlpha: 1, y: 0, duration: 0.3 });
    gsap.to(panelRef.current.querySelectorAll('.abilities-container'), {
      y: -200,
      autoAlpha: 0,
      duration: 0.1,
    });
    return () => {};
  }, []);

  const handleOnClose = async () => {
    document.body.style.overflow = '';
    await gsap.fromTo(panelRef.current, { autoAlpha: 1, y: 0 }, { autoAlpha: 0, y: -200, duration: 0.3 });
    onClose();
  };

  const ScrollAnim = useCallback(() => {
    if (!panelRef.current) return;

    const panelTop = panelRef.current.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight * 0.75;

    if (panelTop < triggerPoint) {
      gsap.to(panelRef.current.querySelectorAll('.abilities-container'), {
        y: 0,
        stagger: 0.15,
        duration: 1,
        autoAlpha: 1,
      });
    }
  }, []);

  const handleAbilityHover = (index, abilityKey) => {
    setHoveredAbility(index);
    setActiveAbility(String(abilityKey).toUpperCase());
  };

  useEffect(() => {
    if (abilityDescRef.current && abilityVidContRef.current) {
      gsap.fromTo(
        [abilityDescRef.current, abilityVidContRef.current],
        { autoAlpha: 0, x: -200 },
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.5,
          ease: 'power2.out',
          stagger: 0.1,
        },
      );
    }
  }, [activeAbility]);

  const AbilityNameDivPhone = () => {
    if (namePhoneRef.current) {
      gsap.fromTo(
        namePhoneRef.current,
        { display: 'none', autoAlpha: 0 },
        { duration: 1, autoAlpha: 1, display: 'flex' },
      );
    }
  };

  const BackToTop = useCallback(() => {
    const panel = panelRef.current;
    const b2t = b2tRef.current;
    b2t.style.opacity = panel.scrollTop > 300 ? '1' : '0';
  }, []);

  const toggleDescription = () => {
    setShowFullDescription(prev => !prev);
    if (descRef.current && descFullRef.current && showBtnRef.current) {
      const show = !showFullDescription;
      descRef.current.style.display = show ? 'none' : 'block';
      descFullRef.current.style.display = show ? 'contents' : 'none';
      showBtnRef.current.style.display = show ? 'none' : 'inline';
    }
  };

  const handleVideoEnter = () => {
    if (videoRef.current) {
      videoRef.current.volume = 0.3;
      videoRef.current.muted = false;
    }
  };
  const handleVideoLeave = () => {
    if (videoRef.current) {
      videoRef.current.muted = true;
    }
  };

  useEffect(() => {
    const b2t = b2tRef.current;
    const handleClick = () => {
      panelRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    };
    b2t.addEventListener('click', handleClick);

    return () => {
      b2t.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div
      ref={panelRef}
      id="champion-info-panel"
      data-testid="info-panel"
      style={{ display: 'block' }}
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
          handleOnClose();
          setActiveAbility(null);
        }}
      >
        X
      </button>
      <div id="champion-detail-image" className="non-selectable">
        <img id="champBgImg" alt="Splash Art Background" src={defaultSkinImgUrl} />
        <img id="champImg" alt="Splash Art" src={defaultSkinImgUrl} />
      </div>

      <div id="champion-detail-name">{champion.name}</div>
      <div id="champion-detail-title">{champion.title}</div>

      <div id="champion-detail-description-container">
        <span id="champion-detail-description" ref={descRef}>
          {champion.blurb}
        </span>
        <button id="showBtn" ref={showBtnRef} onClick={toggleDescription}>
          Show more...
        </button>
        <span id="champion-detail-description-full" style={{ display: 'none' }} ref={descFullRef}>
          {champion.lore}
        </span>
      </div>
      <div id="champion-detail-abilities-container">
        <span id="abilities-text">Abilities</span>
        <div id="champion-detail-abilities-qwer-container">
          <div
            id="champion-detail-abilities-p-container"
            className="abilities-container"
            onMouseEnter={() => handleAbilityHover('passive', 'P')}
            onClick={() => AbilityNameDivPhone()}
          >
            <img
              id="champion-detail-abilities-p"
              alt="Passive ability"
              src={`${cdn + version}/img/passive/` + champion?.passive?.image?.full}
              className="champion-detail-ability"
            />
            <span id="champion-detail-abilities-p-name" className="abilities-name">
              {champion?.passive?.name}
            </span>
          </div>
          {champion.spells.map((spell, i) => (
            <div
              key={spell.id}
              id={`champion-detail-abilities-${['q', 'w', 'e', 'r'][i]}-container`}
              className="abilities-container"
              onMouseEnter={() => handleAbilityHover(i, ['q', 'w', 'e', 'r'][i])}
              onClick={() => AbilityNameDivPhone()}
            >
              <img
                id={`champion-detail-abilities-${['q', 'w', 'e', 'r'][i]}`}
                alt={`${spell.name} ability`}
                src={`${cdn}${version}/img/spell/${spell.image.full}`}
                className="champion-detail-ability"
              />
              <span id={`champion-detail-abilities-${['q', 'w', 'e', 'r'][i]}-name`} className="abilities-name">
                {spell.name}
              </span>
            </div>
          ))}
        </div>

        <div id="champion-detail-ability-name-phone-container" ref={namePhoneRef}>
          {hoveredAbility !== null && (
            <span id="champion-detail-ability-name-phone" className="abilities-name">
              {champion.spells[hoveredAbility]?.name}
            </span>
          )}
        </div>

        {activeAbility && (
          <div id="champion-detail-abilities-extra-detail-container" ref={extraDetailRef}>
            <div
              id="champion-detail-abilities-description"
              ref={abilityDescRef}
              dangerouslySetInnerHTML={{
                __html:
                  hoveredAbility === 'passive'
                    ? champion.passive.description
                    : hoveredAbility !== null && champion.spells[hoveredAbility]?.description,
              }}
            ></div>

            <div id="champion-detail-abilities-video-container" ref={abilityVidContRef}>
              <video
                autoPlay
                loop
                muted
                controls
                id="champion-detail-abilities-video"
                className="champion-detail-abilities-videos"
                ref={videoRef}
                key={activeAbility}
                onMouseEnter={handleVideoEnter}
                onMouseLeave={handleVideoLeave}
              >
                <source
                  id="champion-detail-abilities-video-source-webm"
                  type="video/webm"
                  className="champion-detail-abilities-videos"
                  src={ChampionKeyVideo(champion.key, activeAbility)}
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}
      </div>

      <div id="champion-detail-skins-container">
        <span id="skins-text">Skins</span>
        <div id="champion-detail-skins-image-main-container">
          <div id="champion-detail-skins-image-container">
            <img id="champSkinsImg" className="non-selectable" alt="Skin Splash Art" src={skinImgUrl} />
            <img id="champSkinsBgImg" className="non-selectable" alt="Skin Splash Art Background" src={skinImgUrl} />
            <div id="slideShowEnd" className="non-selectable hide"></div>
            <div id="champion-detail-skins-name-container">
              <span id="champion-detail-skins-name" className="non-selectable">
                {champion.skins[skinIndex]?.name === 'default' ? champion.name : champion.skins[skinIndex]?.name}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const ChampionDetailPanel = memo(ChampionDetailPanelComponent);
export default ChampionDetailPanel;
