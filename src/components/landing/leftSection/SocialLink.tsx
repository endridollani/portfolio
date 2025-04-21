import React from 'react';
import { Button } from '@/components/ui/button';

interface SocialLinkProps {
  icon: string;
  altText: string;
  onClick: () => void;
}

export const SocialLink: React.FC<SocialLinkProps> = ({ icon, altText, onClick }) => (
  <Button className="hover:bg-transparent m-0 p-0 cursor-pointer" onClick={onClick} variant="ghost">
    <img
      alt={altText}
      className="h-6 w-auto lg:h-8 hover:scale-110 transition-transform duration-300"
      src={icon}
    />
  </Button>
);
