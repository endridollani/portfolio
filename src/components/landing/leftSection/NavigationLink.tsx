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
    <div
      className={cn(
        'cursor-pointer relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0 after:transition-all after:duration-300 hover:after:w-full transition-all duration-300',
        isActive
          ? 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-primary to-yellow-200 animate-gradient-pulse after:w-full after:bg-gradient-to-r after:from-yellow-200 after:via-primary after:to-yellow-200 after:animate-gradient-pulse font-medium'
          : 'text-muted-foreground  hover:text-foreground',
      )}
      onClick={onClick}
    >
      {sectionId}
    </div>
  );
};

export default NavigationLink;
