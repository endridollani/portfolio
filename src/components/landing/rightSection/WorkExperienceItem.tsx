import React from 'react';
import { ExternalLink, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectItem {
  name: string;
  role: string;
  bullets: string[];
  skills: string[];
  link?: string;
}

interface WorkExperienceItemProps {
  role: string;
  company: string;
  timeframe: string;
  bullets?: string[];
  link?: string;
  skills?: string[];
  projects?: ProjectItem[];
}

const WorkExperienceItem: React.FC<WorkExperienceItemProps> = ({
  role,
  company,
  timeframe,
  bullets = [],
  link,
  skills = [],
  projects = [],
}) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="text-[.8rem] text-muted-foreground leading-relaxed">{timeframe}</div>
        {link ? (
          <div
            className={cn(
              'flex items-center gap-2 text-foreground hover:text-accent duration-200 text-xs lg:text-sm font-semibold leading-relaxed',
              link && 'cursor-pointer',
            )}
            {...(link && {
              onClick: () => window.open(link, '_blank'),
            })}
          >
            <div className="flex lg:items-center gap-2 flex-col lg:flex-row text-pretty flex-wrap">
              <span>{role}</span>
              <Minus className="hidden xl:inline" />
              <a
                className={cn(
                  'flex flex-row gap-1 cursor-default text-[1rem] lg:text-sm',
                  link && 'hover:text-accent duration-200 cursor-pointer',
                )}
                {...(link && {
                  href: link,
                  target: '_blank',
                })}
              >
                {company}
                {link ? <ExternalLink className="w-3 h-3" /> : null}
              </a>
            </div>
          </div>
        ) : (
          <div className="text-foreground font-semibold leading-relaxed text-[1rem] lg:text-sm">
            {role} — {company}
          </div>
        )}
        {bullets.length > 0 ? (
          <ul className="list-disc list-outside ml-5 text-muted-foreground text-sm leading-relaxed">
            {bullets.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        ) : null}
      </div>
      {projects?.length > 0 ? (
        <div className="space-y-6 pl-4">
          {projects.map((project, index) => (
            <div className="space-y-2" key={index}>
              <div className="text-sm text-foreground font-medium">
                <div className="flex lg:items-center gap-2 text-pretty flex-col lg:flex-row">
                  <a
                    className={cn(
                      'flex flex-row gap-1 cursor-default',
                      project?.link && 'hover:text-accent duration-200 cursor-pointer',
                    )}
                    {...(project?.link && {
                      href: project.link,
                      target: '_blank',
                    })}
                  >
                    {project.name}
                    {project?.link ? <ExternalLink className="w-3 h-3" /> : null}
                  </a>
                  <Minus className="text-muted-foreground hidden lg:inline" />
                  <span className="text-muted-foreground">{project.role}</span>
                </div>
              </div>
              <ul className="list-disc list-outside ml-5 text-muted-foreground text-sm leading-relaxed">
                {project.bullets.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.skills.map((skill, i) => (
                  <span
                    className="text-xs px-2 py-0.5 rounded-md font-medium bg-muted text-muted-foreground"
                    key={i}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : null}
      {skills.length > 0 ? (
        <div className="flex flex-wrap gap-2 mt-2">
          {skills.map((skill, i) => (
            <span
              className="text-xs px-2 py-0.5 rounded-md font-medium bg-muted text-muted-foreground"
              key={i}
            >
              {skill}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default WorkExperienceItem;
