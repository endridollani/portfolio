import React from 'react';

export const AboutSection: React.FC = () => (
  <section className="flex flex-col gap-4" id="introduction">
    <div className="opacity-80">
      <h1 className="text-xs text-muted-foreground opacity-70 font-bold lg:leading-8 ">
        INTRODUCTION
      </h1>
      <div className="border-t border-muted-foreground w-full h-1" />
    </div>
    <p className="text-xs lg:text-sm">
      Hi, I’m Endri Dollani — a full-stack software developer specializing in building scalable,
      user-centric applications for web and mobile. With a strong foundation in React, React Native,
      and Node.js, I focus on delivering clean, performant code and intuitive user experiences.
      Crafting apps that work beautifully — inside and out.
    </p>
  </section>
);
