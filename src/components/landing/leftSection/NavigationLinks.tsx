import React from 'react';
import { NavigationLink } from './NavigationLink';
import { SectionEnum, useSection } from '@/hooks';

export const NavigationLinks: React.FC = () => {
  const { isActiveSection, setActiveSection } = useSection();
  return (
    <nav
      className="hidden lg:visible lg:flex lg:flex-col lg:gap-4 lg:items-start lg:align-middle lg:flex-wrap lg:text-pretty"
      id="links"
    >
      <NavigationLink
        isActive={isActiveSection(SectionEnum.ABOUT)}
        onClick={() => setActiveSection(SectionEnum.ABOUT)}
        sectionId={SectionEnum.ABOUT}
      />
      <NavigationLink
        isActive={isActiveSection(SectionEnum.WORK_EXPERIENCE)}
        onClick={() => setActiveSection(SectionEnum.WORK_EXPERIENCE)}
        sectionId={SectionEnum.WORK_EXPERIENCE}
      />
      <NavigationLink
        isActive={isActiveSection(SectionEnum.CONTACT)}
        onClick={() => setActiveSection(SectionEnum.CONTACT)}
        sectionId={SectionEnum.CONTACT}
      />
    </nav>
  );
};
