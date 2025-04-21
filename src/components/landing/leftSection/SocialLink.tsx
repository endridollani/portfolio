/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable prettier/prettier */
import React from 'react';

interface SocialLinkProps {
  icon: string;
  altText: string;
  href: string;
}

export const SocialLink: React.FC<SocialLinkProps> = ({ icon, altText, href }) => (
  <a
    className="hover:bg-transparent m-0 p-0 cursor-pointer"
    href={href}
    target="_blank" 
  >
    <img
      alt={altText}
      className="h-6 w-auto lg:h-8 hover:scale-110 transition-transform duration-300"
      src={icon}
    />
  </a>
);
