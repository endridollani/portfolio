import React from 'react';
import githubIcon from '@/assets/github-mark.svg';
import linkedInIcon from '@/assets/LI-In-Bug.png';
import { SocialLink } from './SocialLink';

export const SocialLinks: React.FC = () => {
  return (
    <>
      <SocialLink altText="GitHub" icon={linkedInIcon} onClick={() => {}} />
      <SocialLink altText="LinkedIn" icon={githubIcon} onClick={() => {}} />
    </>
  );
};
