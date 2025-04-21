import React from 'react';
import { LeftSection, RightSection, LandingPageLayout } from '@/components/landing';

export const LandingPage: React.FC = () => (
  <LandingPageLayout leftContent={<LeftSection />} rightContent={<RightSection />} />
);
