import { SectionEnum } from '@/hooks';
import React from 'react';
import RightSectionTitle from './RightSectionTitle';

export const AboutSection: React.FC = () => (
  <section className="flex flex-col gap-5 lg:gap-6" id="section-about">
    <RightSectionTitle section={SectionEnum.ABOUT} />

    <p className="max-w-2xl text-sm leading-7 text-foreground/78 lg:text-[1rem] lg:leading-8">
      <span className="text-white font-medium">Full-stack engineer</span> building production-ready
      digital products across web and mobile, from GIS SaaS platforms and AI-powered apps to
      enterprise HR systems and marketing intelligence tools.
    </p>

    <p className="max-w-2xl text-sm leading-7 text-foreground/78 lg:text-[1rem] lg:leading-8">
      I specialise in{' '}
      <span className="text-white font-medium">
        React, React Native, Next.js, NestJS, and TypeScript
      </span>
      , with hands-on experience across architecture, billing integrations, geospatial workflows,
      mobile delivery, and CI/CD.
    </p>
  </section>
);
