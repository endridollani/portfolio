import { SectionEnum } from '@/hooks';
import React from 'react';

interface RightSectionTitleProps {
  section: SectionEnum;
}

const RightSectionTitle: React.FC<RightSectionTitleProps> = ({ section }) => {
  return (
    <div>
      <h1 className="transition-all duration-300 font-medium text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-primary to-yellow-200 animate-gradient-pulse">
        {section}
      </h1>
      <div className="w-full h-0.5 mt-1 transition-all duration-300 bg-gradient-to-r from-yellow-200 via-primary to-yellow-200 animate-gradient-pulse" />
    </div>
  );
};

export default RightSectionTitle;
