import { SectionEnum, useActiveSectionStore } from './useActiveSectionStore';

export const useSection = () => {
  const { activeSection, setActiveSection, setIsProgrammaticScroll } = useActiveSectionStore();

  const isActiveSection = (section: SectionEnum) => {
    return activeSection === section;
  };

  const getSectionId = (section: SectionEnum) => {
    // Map section enum to actual IDs used in components
    const sectionIdMap: Record<SectionEnum, string> = {
      [SectionEnum.ABOUT]: 'section-about',
      [SectionEnum.WORK_EXPERIENCE]: 'section-work-experience',
      [SectionEnum.CONTACT]: 'section-contact',
    };
    return sectionIdMap[section];
  };

  const onSectionChange = (section: SectionEnum) => {
    const element = document.getElementById(getSectionId(section));
    if (element) {
      // Set flag to disable scroll observer during programmatic scroll
      setIsProgrammaticScroll(true);

      // Set the active section immediately (before scrolling)
      if (section !== activeSection) {
        setActiveSection(section);
      }

      // ABOUT and WORK_EXPERIENCE scroll to top, CONTACT scrolls to center
      const scrollToTop = section === SectionEnum.ABOUT || section === SectionEnum.WORK_EXPERIENCE;
      
      // Find the scrollable container (RightSectionLayout)
      const scrollableContainer = element.closest('section[class*="overflow"]') as HTMLElement;
      const scrollTarget = scrollableContainer || window;

      element.scrollIntoView({
        behavior: 'smooth',
        block: scrollToTop ? 'start' : 'center',
      });

      // Re-enable scroll observer after scroll completes
      // Use scroll event listener to detect when scrolling actually ends
      let scrollEndTimer: NodeJS.Timeout;
      let isScrolling = false;

      const handleScroll = () => {
        if (!isScrolling) {
          isScrolling = true;
        }
        clearTimeout(scrollEndTimer);
        scrollEndTimer = setTimeout(() => {
          isScrolling = false;
          setIsProgrammaticScroll(false);
          if (scrollTarget === window) {
            window.removeEventListener('scroll', handleScroll);
          } else {
            scrollableContainer?.removeEventListener('scroll', handleScroll);
          }
        }, 150);
      };

      // Listen to scroll events on the appropriate container
      if (scrollTarget === window) {
        window.addEventListener('scroll', handleScroll, { passive: true });
      } else {
        scrollableContainer?.addEventListener('scroll', handleScroll, { passive: true });
      }

      // Fallback timeout in case scroll events don't fire properly
      setTimeout(() => {
        setIsProgrammaticScroll(false);
        if (scrollTarget === window) {
          window.removeEventListener('scroll', handleScroll);
        } else {
          scrollableContainer?.removeEventListener('scroll', handleScroll);
        }
      }, 2000);
    }
  };

  return {
    activeSection,
    setActiveSection: onSectionChange,
    isActiveSection,
  };
};
