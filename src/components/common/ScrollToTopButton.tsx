/* eslint-disable react/button-has-type */
'use client';

import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-4 z-50 rounded-full p-2 bg-primary text-primary-foreground shadow-md transition-opacity duration-300 lg:hidden ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={scrollToTop}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
