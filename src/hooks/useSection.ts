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

      // Set the active section immediately
      if (section !== activeSection) {
        setActiveSection(section);
      }

      // ABOUT and WORK_EXPERIENCE scroll to top, CONTACT scrolls to center
      const scrollToTop = section === SectionEnum.ABOUT || section === SectionEnum.WORK_EXPERIENCE;
      element.scrollIntoView({
        behavior: 'smooth',
        block: scrollToTop ? 'start' : 'center',
      });

      // Re-enable scroll observer after scroll completes
      // Estimate scroll duration (typically 500-1000ms for smooth scroll)
      const scrollDuration = 1000;
      setTimeout(() => {
        setIsProgrammaticScroll(false);
      }, scrollDuration);
    }
  };

  return {
    activeSection,
    setActiveSection: onSectionChange,
    isActiveSection,
  };
};
