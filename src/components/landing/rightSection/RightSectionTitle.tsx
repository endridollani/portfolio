import { SectionEnum, useSection } from '@/hooks';
import { cn } from '@/lib/utils';
import React from 'react';

interface RightSectionTitleProps {
  section: SectionEnum;
}

const RightSectionTitle: React.FC<RightSectionTitleProps> = ({ section }) => {
  const { activeSection } = useSection();

  const isActive = activeSection === section;
  return (
    <div>
      <h1
        className={cn(
          'transition-all duration-300',
          isActive
            ? 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-primary to-yellow-200 animate-gradient-pulse font-medium'
            : 'text-muted-foreground',
        )}
      >
        {section}
      </h1>
      <div
        className={cn(
          'w-full h-1 mt-1 transition-all duration-300',
          isActive
            ? 'bg-gradient-to-r from-yellow-200 via-primary to-yellow-200 animate-gradient-pulse'
            : 'border-t border-muted-foreground',
        )}
      />
    </div>
  );
};

export default RightSectionTitle;
