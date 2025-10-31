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
          'transition-all duration-300 font-medium',
          // Always show gradient on mobile (when nav links are hidden)
          'text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-primary to-yellow-200 animate-gradient-pulse',
          // On desktop (lg+), only show gradient when active
          !isActive && 'lg:text-muted-foreground lg:bg-clip-padding lg:bg-none lg:animate-none',
        )}
      >
        {section}
      </h1>
      <div
        className={cn(
          'w-full h-1 mt-1 transition-all duration-300',
          // Always show gradient on mobile
          'bg-gradient-to-r from-yellow-200 via-primary to-yellow-200 animate-gradient-pulse',
          // On desktop (lg+), only show gradient when active
          !isActive && 'lg:bg-none lg:animate-none lg:border-t lg:border-muted-foreground',
          isActive &&
            'lg:bg-gradient-to-r lg:from-yellow-200 lg:via-primary lg:to-yellow-200 lg:animate-gradient-pulse',
        )}
      />
    </div>
  );
};

export default RightSectionTitle;
