import React from 'react';
import githubIcon from '@/assets/github-mark.svg';
import linkedInIcon from '@/assets/LI-In-Bug.png';
import { SocialLink } from './SocialLink';

export const SocialLinks: React.FC = () => {
  return (
    <>
      <SocialLink
        altText="LinkedIn"
        href="https://linkedin.com/in/endri-dollani"
        icon={linkedInIcon}
      />
      <SocialLink altText="GitHub" href="https://github.com/endridollani" icon={githubIcon} />
    </>
  );
};
