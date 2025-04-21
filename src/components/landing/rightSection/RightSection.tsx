import React from 'react';
import { RightSectionLayout } from './RightSectionLayout';
import { AboutSection } from './AboutSection';
import { WorkExperienceSection } from './WorkExperienceSection';
import { ContactSection } from './ContactSection';

export const RightSection: React.FC = () => (
  <RightSectionLayout
    aboutContent={<AboutSection />}
    contactContent={<ContactSection />}
    workExperienceContent={<WorkExperienceSection />}
  />
);
