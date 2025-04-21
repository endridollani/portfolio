import { SectionEnum, useActiveSectionStore } from './useActiveSectionStore';

export const useSection = () => {
  const { activeSection, setActiveSection } = useActiveSectionStore();

  const isActiveSection = (section: SectionEnum) => {
    return activeSection === section;
  };

  return {
    activeSection,
    setActiveSection: (section: SectionEnum) =>
      section !== activeSection && setActiveSection(section),
    isActiveSection,
  };
};
