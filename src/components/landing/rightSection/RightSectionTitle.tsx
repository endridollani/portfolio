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
          'text-muted-foreground transition-colors duration-200',
          isActive && 'text-foreground font-medium',
        )}
      >
        {section}
      </h1>
      <div
        className={cn(
          'border-t border-muted-foreground w-full h-1 mt-1 transition-colors duration-300',
          isActive && 'lg:border-foreground',
        )}
      />
    </div>
  );
};

export default RightSectionTitle;
