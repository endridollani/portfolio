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
        <div className="absolute bottom-0 left-3 top-0 w-px bg-gradient-to-b from-border via-border/80 to-transparent" />

        {/* Timeline items */}
        <div className="space-y-12 lg:space-y-16 overflow-visible">
          <WorkExperienceItem
            company="AtraX"
            link="https://atrax.al/"
            role="Full Stack Engineer"
            timeframe="Nov 2025 - Present"
            bullets={[
              'Serving as lead full-stack engineer on MARS, a GIS SaaS product enabling renewable-energy developers and analysts to assess site feasibility through complex geospatial workflows',
              'Implemented a complete billing and subscription system integrating Stripe for automated payments and a manual bank transfer approval flow managed by super-admins.',
            ]}
            skills={[
              'NestJS',
              'Next.js',
              'React.js',
              'TypeScript',
              'Geospatial Data',
              'GeoServer',
              'PostgreSQL',
              'REST APIs',
              'Azure DevOps Services',
            ]}
            project={{
              name: 'MARS - The New Gravity',
            }}
          />
          <WorkExperienceItem
            company="AtraX"
            link="https://atrax.al/"
            role="Full Stack Engineer"
            timeframe="Jun 2022 - Present"
            bullets={[
              'Served as full-stack engineer on an HR SaaS platform enabling companies to manage their workforce and resources efficiently',
              'Managed CI/CD pipelines through Azure DevOps',
              'Extended the product with a cross-platform mobile application using React Native and Expo',
              'Contributed across frontend and backend throughout the full product lifecycle',
            ]}
            skills={[
              'NestJS',
              'PostgreSQL',
              'React.js',
              'React Native',
              'TypeScript',
              'Docker',
              'Expo',
              'Azure DevOps Services',
              'Mobile Application Development',
              'SaaS Development',
            ]}
            project={{
              name: 'Dextrio',
              link: 'https://atrax.al/blog/portfolio/dextrio/',
            }}
          />
          <WorkExperienceItem
            company="AtraX"
            link="https://atrax.al/"
            role="Senior Frontend Developer"
            timeframe="Jun 2025 - Nov 2025"
            bullets={[
              'Architected and built the frontend for an AI-powered marketing intelligence platform that analyses real-time sales conversations, CRM data, and notes',
              'Owned the frontend foundation, including project structure, state management, data fetching, authentication, authorisation, and backend API integration',
              'Collaborated with design and backend to define UX and API contracts and deliver a production-ready dashboard on a tight timeline',
            ]}
            skills={['Next.js', 'React.js', 'TypeScript']}
            project={{
              name: 'Bridj.ai',
              link: 'https://www.bridj.ai/',
            }}
          />
          <WorkExperienceItem
            company="AtraX"
            link="https://atrax.al/"
            role="Senior Software Engineer"
            timeframe="Mar 2024 - May 2025"
            bullets={[
              'Led mobile development for an AI-powered kitchen assistant focused on reducing food waste through ingredient logging and receipt scanning',
              'Built the cross-platform app with React Native and Expo and independently managed App Store Connect and Google Play Console deployments',
              'Contributed to the marketing website and teaser web app, bringing early access to mobile features ahead of full launch',
            ]}
            skills={[
              'React Native',
              'React.js',
              'Expo',
              'Redux.js',
              'TypeScript',
              'Mobile Application Development',
            ]}
            project={{
              name: 'Remy - Agentic Food Retail',
              link: 'https://www.remyapp.io/',
            }}
          />
          <WorkExperienceItem
            company="AtraX"
            link="https://atrax.al/"
            role="Frontend Developer"
            timeframe="Nov 2022 - Mar 2024"
            bullets={[
              "Developed frontend features in React and TypeScript for Toyota's internal lead management system built on a microfrontend architecture",
              'Implemented the full frontend SignalR integration for live updates and backend-triggered notifications',
              'Integrated REST APIs and async data flows backed by MongoDB and RabbitMQ to keep lead data in sync across the platform',
            ]}
            skills={[
              'React.js',
              'TypeScript',
              'MongoDB',
              'Docker',
              'RabbitMQ',
              'SignalR',
              'REST APIs',
              'Redux.js',
            ]}
            project={{
              name: 'Toshiko',
              link: 'https://atrax.al/blog/portfolio/toyota/',
            }}
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
