import { SectionEnum } from '@/hooks';
import React from 'react';
import RightSectionTitle from './RightSectionTitle';

export const AboutSection: React.FC = () => (
  <section className="flex flex-col gap-4" id="introduction">
    <RightSectionTitle section={SectionEnum.ABOUT} />
    <p className="text-xs lg:text-sm leading-relaxed">
      Hi, I’m Endri Dollani — a full-stack software developer specializing in building scalable,
      user-centric applications for web and mobile. With a strong foundation in React, React Native,
      and Node.js, I focus on delivering clean, performant code and intuitive user experiences.
      Crafting apps that work beautifully — inside and out.
    </p>
  </section>
);
