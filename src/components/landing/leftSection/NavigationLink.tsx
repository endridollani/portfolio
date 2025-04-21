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
        'cursor-pointer text-muted-foreground hover:text-foreground relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full',
        isActive
          ? 'text-foreground after:w-full font-medium'
          : 'text-muted-foreground after:w-0 hover:text-foreground',
      )}
      onClick={onClick}
    >
      {sectionId}
    </div>
  );
};
