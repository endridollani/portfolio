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
            company="AtraX"
            link="https://atrax.al/"
            projects={[
              {
                name: 'MARS - The New Gravity',
                role: 'Full Stack Engineer',
                timeframe: 'Nov 2025 - Present · 6 mos',
                bullets: [
                  'Serving as a full-stack engineer on MARS, a GIS SaaS product for renewable energy feasibility analysis',
                  'Building geospatial workflows that help developers and analysts evaluate sites through complex mapping and spatial data flows',
                ],
                skills: [
                  'Next.js',
                  'NestJS',
                  'TypeScript',
                  'React',
                  'GIS',
                  'Geospatial Analysis',
                  'SaaS',
                  'Zustand',
                  'TanStack Query',
                ],
              },
              {
                name: 'Dextrio',
                role: 'Full Stack Engineer',
                timeframe: 'Jun 2022 - Present · 3 yrs 11 mos',
                link: 'https://atrax.al/blog/portfolio/dextrio/',
                bullets: [
                  'Served as full-stack engineer on an HR SaaS platform enabling companies to manage their workforce and resources efficiently',
                  'Managed CI/CD pipelines through Azure DevOps',
                  'Extended the product with a cross-platform mobile application using React Native and Expo',
                  'Contributed across frontend and backend throughout the full product lifecycle',
                ],
                skills: [
                  'NestJS',
                  'PostgreSQL',
                  'React',
                  'TypeScript',
                  'React Native',
                  'Expo',
                  'Azure DevOps',
                ],
              },
              {
                name: 'Bridj.ai',
                role: 'Senior Frontend Developer',
                timeframe: 'Jun 2025 - Nov 2025 · 6 mos',
                bullets: [
                  'Architected and built the frontend for an AI-powered marketing intelligence platform that analyses real-time sales conversations, CRM data, and notes',
                  'Owned the frontend foundation, including project structure, state management, data fetching, authentication, authorisation, and backend API integration',
                  'Collaborated with design and backend to define UX and API contracts and deliver a production-ready dashboard on a tight timeline',
                ],
                skills: ['Next.js', 'NestJS', 'TypeScript'],
                link: 'https://www.bridj.ai/',
              },
              {
                name: 'Remy - Agentic Food Retail',
                role: 'Senior Software Engineer',
                timeframe: 'Mar 2024 - May 2025 · 1 yr 3 mos',
                bullets: [
                  'Led mobile development for an AI-powered kitchen assistant focused on reducing food waste through ingredient logging and receipt scanning',
                  'Built the cross-platform app with React Native and Expo and independently managed App Store Connect and Google Play Console deployments',
                  'Contributed to the marketing website and teaser web app, bringing early access to mobile features ahead of full launch',
                ],
                link: 'https://www.remyapp.io/',
                skills: [
                  'React Native',
                  'React.js',
                  'Expo',
                  'TypeScript',
                  'App Store Connect',
                  'Google Play Console',
                ],
              },
              {
                name: 'Toshiko',
                link: 'https://atrax.al/blog/portfolio/toyota/',
                role: 'Frontend Developer',
                timeframe: 'Nov 2022 - Mar 2024 · 1 yr 5 mos',
                bullets: [
                  "Developed frontend features in React and TypeScript for Toyota's internal lead management system built on a microfrontend architecture",
                  'Implemented the full frontend SignalR integration for live updates and backend-triggered notifications',
                  'Integrated REST APIs and async data flows backed by MongoDB and RabbitMQ to keep lead data in sync across the platform',
                ],
                skills: [
                  'React',
                  'TypeScript',
                  'SignalR',
                  'MongoDB',
                  'RabbitMQ',
                  'REST APIs',
                  'Microfrontends',
                ],
              },
            ]}
            role="Full Stack Engineer"
            timeframe="Jun 2022 - Present · 3 yrs 11 mos"
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
