import { useEffect } from 'react';
import { SectionEnum, useActiveSectionStore } from './useActiveSectionStore';

export const sectionMap: Record<string, SectionEnum> = {
  'section-about': SectionEnum.ABOUT,
  'section-work-experience': SectionEnum.WORK_EXPERIENCE,
  'section-contact': SectionEnum.CONTACT,
};

export const useScrollObserver = () => {
  const { setActiveSection, isProgrammaticScroll } = useActiveSectionStore();

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        // Don't update if we're programmatically scrolling
        if (isProgrammaticScroll) return;

        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            if (id && sectionMap[id]) {
              setActiveSection(sectionMap[id]);
            }
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-25% 0px -10% 0px', // helps trigger near middle of screen
      },
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, [setActiveSection, isProgrammaticScroll]);
};
