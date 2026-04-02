import React from 'react';

interface SocialLinkProps {
  icon: string;
  altText: string;
  href: string;
}

export const SocialLink: React.FC<SocialLinkProps> = ({ icon, altText, href }) => (
  <a
    className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-card/40 transition-colors duration-200 hover:border-accent/40 hover:bg-card/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    href={href}
    rel="noreferrer"
    target="_blank"
  >
    <img
      alt={altText}
      className="h-4.5 w-auto opacity-75 transition-all duration-200 group-hover:scale-105 group-hover:opacity-100 lg:h-5"
      src={icon}
    />
  </a>
);
