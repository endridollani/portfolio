import React from 'react';
import { LeftSectionLayout } from './LeftSectionLayout';
import { HeroSection } from './HeroSection';
import { SocialLinks } from './SocialLinks';

export const LeftSection: React.FC = () => (
  <LeftSectionLayout heroContent={<HeroSection />} socialLinksContent={<SocialLinks />} />
);
