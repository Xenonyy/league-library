import { useEffect } from 'react';
import { gsap } from 'gsap';

const useSkinSlideshow = ({ champion, skinIndex, setSkinIndex, skinImgRef, skinBgImgRef, cdn }) => {
  useEffect(() => {
    if (!champion?.skins?.length) return;
    let timeoutId;
    let isCancelled = false;
    const fadeDuration = 1;
    const delayBetween = 2500;

    const cycleSkins = async () => {
      const nextIndex = (skinIndex + 1) % champion.skins.length;
      const nextSkin = champion.skins[nextIndex];
      const nextSkinUrl = `${cdn}img/champion/splash/${champion.id}_${nextSkin.num}.jpg`;

      await new Promise(resolve => {
        const img = new Image();
        img.src = nextSkinUrl;
        img.onload = resolve;
      });

      await gsap.to([skinImgRef.current, skinBgImgRef.current], {
        duration: fadeDuration,
        opacity: 0,
        ease: 'power4.out',
      });

      if (isCancelled) return;
      setSkinIndex(nextIndex);
    };

    const fadeInAfterSwitch = async () => {
      await gsap.fromTo(
        ['#champSkinsImg', '#champSkinsBgImg'],
        { opacity: 0 },
        { opacity: 1, duration: fadeDuration, ease: 'expoScale(0.5,7,none)' },
      );
      timeoutId = setTimeout(cycleSkins, delayBetween);
    };

    fadeInAfterSwitch();

    return () => {
      isCancelled = true;
      clearTimeout(timeoutId);
    };
  }, [skinIndex, champion, setSkinIndex, skinImgRef, skinBgImgRef, cdn]);
};
export default useSkinSlideshow;
