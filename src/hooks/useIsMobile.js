import { useEffect, useState } from 'react';

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || window.opera;
    const isDetectedMobile = /android|iphone|ipad|ipod|iemobile|blackberry|bada|silk/i.test(userAgent.toLowerCase());
    setIsMobile(isDetectedMobile);
  }, []);

  return isMobile;
}
