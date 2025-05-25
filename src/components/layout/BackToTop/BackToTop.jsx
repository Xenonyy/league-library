import React, { useEffect, useState } from 'react';

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  if (!visible) return null;

  return (
    <button
      id="b2t"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{ display: visible ? 'block' : 'none' }}
    >
      <img
        src="https://i.gyazo.com/8fde68144b0fe90786b9472cdcad77f1.png"
        srcSet="https://i.gyazo.com/8fde68144b0fe90786b9472cdcad77f1.png, https://i.gyazo.com/25bca84d684ddfe5d7dd4aaec54f92e6.png"
        alt="Scroll To The Top"
        id="b2t-img"
      ></img>
    </button>
  );
}

export default BackToTop;
