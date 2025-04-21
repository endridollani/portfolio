import { SectionEnum } from '@/hooks';
import React from 'react';
import RightSectionTitle from './RightSectionTitle';

export const AboutSection: React.FC = () => (
  <section className="flex flex-col gap-4" id="introduction">
    <RightSectionTitle section={SectionEnum.ABOUT} />

    <p className="text-xs lg:text-sm leading-relaxed text-muted-foreground">
      <span>I build performant digital products</span> that balance
      <span>technical depth</span> with a great{` `}
      <span>user experience</span> — from{' '}
      <span className="text-white font-medium">mobile apps</span> to{' '}
      <span className="text-white font-medium">web platforms</span>.
    </p>

    <p className="text-xs lg:text-sm leading-relaxed text-muted-foreground">
      Over the last few years, I&apos;ve worked as a{' '}
      <span className="text-white font-medium">full-stack engineer</span> on a wide range of
      applications — from human resources SaaS to production-ready cross-platform tools. My go-to
      stack includes <span className="text-white font-medium">React</span>,{' '}
      <span className="text-white font-medium">React Native</span>,{' '}
      <span className="text-white font-medium">NestJS</span>,{' '}
      <span className="text-white font-medium">PostgreSQL</span> and{' '}
      <span className="text-white font-medium">TypeScript</span>.
    </p>

    <p className="text-xs lg:text-sm leading-relaxed text-muted-foreground">
      I’ve contributed to full project cycles — including deployments with{' '}
      <span className="text-white font-medium">Azure DevOps</span>, containerization with{' '}
      <span className="text-white font-medium">Docker</span>, and mobile delivery through{' '}
      <span className="text-white font-medium">App Store Connect</span> and the{' '}
      <span className="text-white font-medium">Play Console</span>.
    </p>
  </section>
);
