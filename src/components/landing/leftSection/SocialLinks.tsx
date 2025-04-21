import React from 'react';
import { Button } from '@/components/ui/button';
import githubIcon from '@/assets/github-mark.svg';
import linkedInIcon from '@/assets/LI-In-Bug.png';

export const SocialLinks: React.FC = () => {
  return (
    <>
      <Button
        className="hover:bg-transparent m-0 p-0"
        onClick={() => {
          window.open('https://github.com/logos', '_blank');
        }}
        variant="ghost"
      >
        <img
          alt="GitHub"
          className="w-auto max-w-10 h-8 cursor-pointer hover:scale-110  transition-transform duration-300 text-white"
          src={linkedInIcon}
        />
      </Button>
      <Button
        className="hover:bg-transparent m-0 p-0"
        onClick={() => {
          window.open('https://github.com/logos', '_blank');
        }}
        variant="ghost"
      >
        <img
          alt="GitHub"
          className="w-auto max-w-10 h-8 cursor-pointer hover:scale-110  transition-transform duration-300 text-white"
          src={githubIcon}
        />
      </Button>
    </>
  );
};
