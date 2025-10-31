import React from 'react';
import githubIcon from '@/assets/GitHub.svg';
import linkedInIcon from '@/assets/LinkedIn.svg';
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
