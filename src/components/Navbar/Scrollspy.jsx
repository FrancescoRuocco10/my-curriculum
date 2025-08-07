import { useEffect } from 'react';

const ScrollSpy = () => {
  useEffect(() => {
    const sectionIds = ['Home', 'AboutMe', 'Experience', 'Certifications', 'Form', 'Contacts'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (let id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            if (window.location.hash !== `#${id}`) {
              history.replaceState(null, '', `#${id}`);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;
};

export default ScrollSpy;