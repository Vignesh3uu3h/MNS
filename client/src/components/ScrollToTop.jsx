import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-6 right-6 z-40 rounded-full bg-brand-green p-3 text-white shadow-lg transition-opacity ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      aria-label="Scroll to top"
    >
      <FaArrowUp />
    </button>
  );
}

export default ScrollToTop;
