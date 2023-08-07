import { useState, useEffect } from 'react';
import '../styles/ScrollToTopButton.css'

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const mainContent = document.getElementsByClassName('all-main')[0];
    if (mainContent) {
      const rect = mainContent.getBoundingClientRect();
      setShowButton(rect.bottom < window.innerHeight && window.scrollY > 0);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`scroll-to-top-button ${showButton ? 'show' : 'hide'}`}
      onClick={scrollToTop}
    >
      Voltar ao topo
    </button>
  );
}

