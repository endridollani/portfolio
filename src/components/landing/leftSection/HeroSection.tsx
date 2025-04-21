import React from 'react';

export const HeroSection: React.FC = () => (
  <section className="flex flex-col gap-4 text-pretty" id="hero">
    <div className="flex flex-col gap-2 flex-wrap text-pretty">
      <a className="text-4xl lg:text-5xl font-bold cursor-pointer" href="#introduction">
        Endri Dollani
      </a>
      <div className="flex flex-row gap-4 items-center align-middle flex-wrap text-pretty">
        <h2 className="text-sm lg:text-[1.25rem] font-normal text-foreground">
          Full Stack Engineer
        </h2>
        <h2 className="text-sm lg:text-[1.25rem] font-normal text-muted-foreground">{` | `}</h2>
        <h2 className="text-sm lg:text-[1.25rem] font-normal text-accent">Mobile & Web</h2>
      </div>
    </div>
    <div>
      <p className="text-xs lg:text-sm text-muted-foreground text-pretty">
        Crafting apps that work beautifully, inside and out.
      </p>
    </div>
  </section>
);
