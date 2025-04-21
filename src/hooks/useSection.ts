import { SectionEnum, useActiveSectionStore } from './useActiveSectionStore';

export const useSection = () => {
  const { activeSection, setActiveSection } = useActiveSectionStore();

  const isActiveSection = (section: SectionEnum) => {
    return activeSection === section;
  };

  const getSectionId = (section: SectionEnum) => {
    return `section-${section.toLowerCase().replace(/\s+/g, '-')}`;
  };

  const onSectionChange = (section: SectionEnum) => {
    const element = document.getElementById(getSectionId(section));
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: section === SectionEnum.WORK_EXPERIENCE ? 'start' : 'center',
      });
    }
    if (section !== activeSection) {
      setActiveSection(section);
    }
  };

  return {
    activeSection,
    setActiveSection: onSectionChange,
    isActiveSection,
  };
};
