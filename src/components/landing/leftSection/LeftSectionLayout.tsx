import React from 'react';

interface LeftSectionLayoutProps {
  heroContent: React.ReactNode;
  socialLinksContent?: React.ReactNode;
}

export const LeftSectionLayout: React.FC<LeftSectionLayoutProps> = ({
  heroContent,
  socialLinksContent,
}) => {
  return (
    <div className="flex flex-col lg:justify-between items-start lg:h-full lg:gap-0 gap-8 w-full">
      <div className="flex flex-col gap-16" id="left-section">
        {heroContent}
        {/* <NavigationLinks /> */}
      </div>
      <div className="flex flex-row gap-8 items-center">{socialLinksContent}</div>
    </div>
  );
};
