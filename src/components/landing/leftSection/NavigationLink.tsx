import { SectionEnum } from '@/hooks';
import { cn } from '@/lib/utils';
import React from 'react';

interface NavigationLinkProps {
  sectionId: SectionEnum;
  isActive?: boolean;
  onClick?: () => void;
}

export const NavigationLink: React.FC<NavigationLinkProps> = ({
  sectionId,
  isActive = false,
  onClick,
}) => {
  return (
    <button
      className={cn(
        'group inline-flex items-center gap-3 text-left text-[0.72rem] font-medium uppercase tracking-[0.22em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
      )}
      onClick={onClick}
      type="button"
    >
      <span
        className={cn(
          'h-px w-6 transition-all duration-200',
          isActive ? 'w-10 bg-accent' : 'bg-border group-hover:w-8 group-hover:bg-muted-foreground',
        )}
      />
      <span>{sectionId}</span>
    </button>
  );
};

export default NavigationLink;
