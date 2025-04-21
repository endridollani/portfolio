import React from 'react';
import { DynamicParticlesBackground } from '../particles';

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="relative w-full h-full">
      <DynamicParticlesBackground />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
