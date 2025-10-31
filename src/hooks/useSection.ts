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
      // The scrollable container is the parent section element with overflow-y-auto
      let scrollableContainer: HTMLElement | null = element.parentElement;
      while (scrollableContainer) {
        const styles = window.getComputedStyle(scrollableContainer);
        if (styles.overflowY === 'auto' || styles.overflowY === 'scroll') {
          break;
        }
        scrollableContainer = scrollableContainer.parentElement;
      }

      element.scrollIntoView({
        behavior: 'smooth',
        block: scrollToTop ? 'start' : 'center',
      });

      // Re-enable scroll observer after scroll completes
      // Use scroll event listener to detect when scrolling actually ends
      let scrollEndTimer: ReturnType<typeof setTimeout>;
      let isCleanedUp = false;

      const cleanup = () => {
        if (isCleanedUp) return;
        isCleanedUp = true;
        clearTimeout(scrollEndTimer);
        clearTimeout(fallbackTimer);
        setIsProgrammaticScroll(false);
        if (scrollableContainer) {
          scrollableContainer.removeEventListener('scroll', handleScroll);
        } else {
          window.removeEventListener('scroll', handleScroll);
        }
      };

      const handleScroll = () => {
        clearTimeout(scrollEndTimer);
        scrollEndTimer = setTimeout(() => {
          cleanup();
        }, 150);
      };

      // Listen to scroll events on the appropriate container
      if (scrollableContainer) {
        scrollableContainer.addEventListener('scroll', handleScroll, { passive: true });
      } else {
        window.addEventListener('scroll', handleScroll, { passive: true });
      }

      // Fallback timeout in case scroll events don't fire properly
      const fallbackTimer: ReturnType<typeof setTimeout> = setTimeout(() => {
        cleanup();
      }, 2000);
    }
  };

  return {
    activeSection,
    setActiveSection: onSectionChange,
    isActiveSection,
  };
};
