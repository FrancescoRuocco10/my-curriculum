import { useEffect, useRef } from 'react';

const useHideOnScroll = (setShow) => {
  const lastScrollY = useRef(window.scrollY); 

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setShow(false);
      } else {
        setShow(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [setShow]);
};

export default useHideOnScroll;