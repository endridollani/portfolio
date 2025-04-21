import React from 'react';

export const NavigationLinks: React.FC = () => {
  return (
    <nav
      className="hidden lg:visible lg:flex lg:flex-col lg:gap-4 lg:items-start lg:align-middle lg:flex-wrap lg:text-pretty"
      id="links"
    >
      <a
        className="text-muted-foreground hover:text-foreground relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full"
        href="#introduction"
      >
        INTRODUCTION
      </a>
      <a
        className="text-muted-foreground hover:text-foreground relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full"
        href="#work-experience"
      >
        WORK EXPERIENCE
      </a>
      <a
        className="text-muted-foreground hover:text-foreground relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full"
        href="#contact"
      >
        CONTACT
      </a>
    </nav>
  );
};
