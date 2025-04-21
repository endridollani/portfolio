import { SectionEnum } from '@/hooks';
import React from 'react';
import RightSectionTitle from './RightSectionTitle';
import WorkExperienceItem from './WorkExperienceItem';

export const WorkExperienceSection: React.FC = () => {
  return (
    <section className="flex flex-col gap-6" id="work-experience">
      <RightSectionTitle section={SectionEnum.WORK_EXPERIENCE} />
      <div className="space-y-8">
        <WorkExperienceItem
          company="AtraX Software Solutions"
          link="https://atrax.al/"
          projects={[
            {
              name: 'Remy',
              role: 'Lead Frontend Developer',
              bullets: [
                'Led mobile development using React Native and Expo',
                'Managed deployments to App Store Connect and Google Play Console',
                'Built teaser web app and landing page for early user access',
              ],
              link: 'https://www.remyapp.io/',
              skills: [
                'React Native',
                'Expo',
                'CI/CD',
                'App Store Connect',
                'Google Play Console',
                'Docker',
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
              role: 'Full-Stack Developer',
              link: 'https://atrax.al/blog/portfolio/dextrio/',
              bullets: [
                'Contributed to an HR SaaS platform using React and NestJS',
                'Built and maintained frontend & backend features',
                'Managed CI/CD with Azure DevOps',
              ],
              skills: ['React', 'NestJS', 'TypeScript', 'Azure DevOps', 'PostgreSQL', 'Docker'],
            },
          ]}
          role="Full-Stack Developer"
          timeframe="2022 — Present"
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
          timeframe="2022 — 2023 (Part-Time)"
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
          timeframe="2019 (Part-Time)"
        />
      </div>
    </section>
  );
};
