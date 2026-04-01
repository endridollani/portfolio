import { SectionEnum } from '@/hooks';
import React from 'react';
import RightSectionTitle from './RightSectionTitle';
import WorkExperienceItem from './WorkExperienceItem';

export const WorkExperienceSection: React.FC = () => {
  return (
    <section className="flex flex-col gap-6" id="section-work-experience">
      <RightSectionTitle section={SectionEnum.WORK_EXPERIENCE} />
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/30 via-muted/50 to-muted" />

        {/* Timeline items */}
        <div className="space-y-12 lg:space-y-16 overflow-visible">
          <WorkExperienceItem
            company="AtraX Software Solutions"
            link="https://atrax.al/"
            projects={[
              {
                name: 'MARS',
                role: 'Lead Full-Stack Engineer',
                bullets: [
                  'Led full-stack delivery for a GIS SaaS platform used to assess renewable-energy site feasibility through complex geospatial workflows',
                  'Designed end-to-end mapping flows including Catasto and Vincoli layers, multi-level AOI selection, and interactive tools for analysts in the field',
                  'Built a super-admin portal for managing users, subscriptions, and platform data',
                  'Implemented billing and subscriptions with Stripe, including automated payments and a manual bank-transfer approval flow',
                ],
                skills: [
                  'React',
                  'Next.js',
                  'NestJS',
                  'TypeScript',
                  'Zustand',
                  'TanStack Query',
                  'Stripe',
                ],
              },
              {
                name: 'Bridj',
                role: 'Lead Frontend Developer',
                bullets: [
                  'Architected and built the frontend for an AI-powered marketing intelligence platform using Next.js and TypeScript',
                  'Owned the frontend foundation including project structure, state management, authentication, authorisation, and backend API integration',
                  'Partnered with design and backend teams to shape a scalable dashboard experience for growth and RevOps teams',
                ],
                skills: ['Next.js', 'TypeScript', 'Authentication', 'API Integration', 'Figma'],
                link: 'https://www.bridj.ai/',
              },
              {
                name: 'Remy',
                role: 'Lead Frontend Developer (Mobile)',
                bullets: [
                  'Led mobile development for an AI-powered kitchen assistant focused on reducing food waste through smarter ingredient and receipt tracking',
                  'Built the cross-platform app with React Native and Expo and independently handled App Store Connect and Google Play Console deployments',
                  'Contributed to the marketing website and teaser web app to unlock early access before full launch',
                ],
                link: 'https://www.remyapp.io/',
                skills: [
                  'React Native',
                  'Expo',
                  'App Store Connect',
                  'Google Play Console',
                  'Cross-Platform Mobile',
                ],
              },
              {
                name: 'Toyota',
                link: 'https://atrax.al/blog/portfolio/toyota/',
                role: 'Frontend Developer',
                bullets: [
                  'Built frontend features in React and TypeScript',
                  'Integrated data workflows with MongoDB and RabbitMQ',
                  'Used Docker for local development and testing',
                ],
                skills: ['React', 'TypeScript', 'MongoDB', 'RabbitMQ', 'Docker'],
              },
              {
                name: 'Dextrio',
                role: 'Lead Full-Stack Developer',
                link: 'https://atrax.al/blog/portfolio/dextrio/',
                bullets: [
                  'Led full-stack development on an HR SaaS platform built with React, NestJS, Redux, and TypeScript',
                  'Managed CI/CD pipelines through Azure DevOps',
                  'Extended the product with a cross-platform mobile app built using React Native and Expo',
                ],
                skills: [
                  'React',
                  'NestJS',
                  'Redux',
                  'TypeScript',
                  'React Native',
                  'Expo',
                  'Azure DevOps',
                ],
              },
            ]}
            role="Full-Stack Engineer"
            timeframe="June 2022 — Present"
          />

          <WorkExperienceItem
            bullets={[
              'Taught web development fundamentals including HTML, CSS, JavaScript, and WordPress',
              'Prepared custom materials and guided students through practical projects',
              'Helped students build and deploy basic websites from scratch',
            ]}
            company="Tirana Center of Technology"
            link="https://tct.edu.al/"
            role="Course Instructor"
            skills={['HTML', 'CSS', 'JavaScript', 'Teaching']}
            timeframe="2022 — 2023"
          />

          <WorkExperienceItem
            bullets={[
              'Maintained and monitored internal network infrastructure and local servers',
              'Provided technical support to government staff and ensured system uptime',
              'Managed IT assets and documented system maintenance procedures',
            ]}
            company="Albania State Police"
            role="IT Specialist"
            skills={['Networking', 'Windows Server', 'Support', 'Documentation']}
            timeframe="2021 — 2022"
          />

          <WorkExperienceItem
            bullets={[
              'Created custom WordPress themes from Figma and Adobe XD designs',
              'Implemented responsive, SEO-optimized layouts and fast-loading templates',
              'Collaborated with designers and marketers to launch client websites',
            ]}
            company="Spontan Creative Media"
            link="https://spontan.agency/"
            role="WordPress Developer"
            skills={['WordPress', 'PHP', 'Figma', 'HTML', 'CSS', 'SEO']}
            timeframe="2019"
          />
        </div>
      </div>
    </section>
  );
};
