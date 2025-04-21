import React from 'react';
import { Button } from '@/components/ui/button';
import githubIcon from '@/assets/github-mark.svg';
import linkedInIcon from '@/assets/LI-In-Bug.png';

interface SocialLinkProps {
  icon: string;
  altText: string;
  onClick: () => void;
}

export const SocialLinks: React.FC = () => {
  return (
    <>
      <SocialLink altText="GitHub" icon={linkedInIcon} onClick={() => {}} />
      <SocialLink altText="LinkedIn" icon={githubIcon} onClick={() => {}} />
    </>
  );
};

const SocialLink: React.FC<SocialLinkProps> = ({ icon, altText, onClick }) => (
  <Button className="hover:bg-transparent m-0 p-0" onClick={onClick} variant="ghost">
    <img
      alt={altText}
      className="w-auto h-6 lg:max-w-10 lg:h-8 cursor-pointer hover:scale-110  transition-transform duration-300 text-white"
      src={icon}
    />
  </Button>
);
