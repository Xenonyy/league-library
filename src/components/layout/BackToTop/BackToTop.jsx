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
      style={{
        display: 'block',
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000,
        background: 'none',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      <img
        src="https://i.gyazo.com/8fde68144b0fe90786b9472cdcad77f1.png"
        srcSet="https://i.gyazo.com/8fde68144b0fe90786b9472cdcad77f1.png, https://i.gyazo.com/25bca84d684ddfe5d7dd4aaec54f92e6.png"
        alt="Scroll To The Top"
        id="b2t-img"
        style={{ width: '40px', height: '40px' }}
      />
    </button>
  );
}

export default BackToTop;
