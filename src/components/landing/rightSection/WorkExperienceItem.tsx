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
    <div className="relative flex gap-6 group">
      {/* Timeline pulsating circle */}
      <div className="relative flex-shrink-0 w-6 min-w-6 overflow-visible">
        {/* Outer pulsating ring */}
        <div className="absolute left-[calc(0.75rem+0.0625rem)] top-1.5 -translate-x-1/2 w-3 h-3 rounded-full bg-accent/20 animate-ping" />
        {/* Main circle */}
        <div className="absolute left-[calc(0.75rem+0.0625rem)] top-1.5 -translate-x-1/2 w-3 h-3 rounded-full bg-accent border-2 border-background shadow-lg group-hover:scale-125 transition-transform duration-200" />
        {/* Inner pulsating ring */}
        <div className="absolute left-[calc(0.75rem+0.0625rem)] top-1.5 -translate-x-1/2 w-3 h-3 rounded-full bg-accent/30 animate-pulse" />
      </div>

      {/* Content */}
      <div className="flex-1 space-y-4 pb-2">
        {/* Timeframe badge */}
        <div className="inline-block">
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
            {timeframe}
          </span>
        </div>

        {/* Role and Company */}
        <div className="space-y-2">
          {link ? (
            <div className="flex flex-col lg:flex-row lg:items-center gap-2 flex-wrap">
              <h3 className="text-foreground font-semibold text-base lg:text-lg leading-tight">
                {role}
              </h3>
              <Minus className="hidden lg:inline text-muted-foreground" />
              <a
                className={cn(
                  'inline-flex items-center gap-1.5 text-foreground font-medium text-sm lg:text-base',
                  'hover:text-accent transition-colors duration-200',
                  'group/link',
                )}
                href={link}
                rel="noopener noreferrer"
                target="_blank"
              >
                {company}
                <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover/link:opacity-100 transition-opacity" />
              </a>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row lg:items-center gap-2 flex-wrap">
              <h3 className="text-foreground font-semibold text-base lg:text-lg leading-tight">
                {role}
              </h3>
              <Minus className="hidden lg:inline text-muted-foreground" />
              <span className="text-foreground font-medium text-sm lg:text-base">{company}</span>
            </div>
          )}

          {/* Bullet points */}
          {bullets.length > 0 ? (
            <ul className="space-y-1.5 mt-3">
              {bullets.map((point, i) => (
                <li
                  className="flex items-start gap-2 text-muted-foreground text-sm leading-relaxed"
                  key={i}
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-muted-foreground/40 flex-shrink-0" />
                  <span className="flex-1">{point}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        {/* Projects */}
        {projects && projects.length > 0 ? (
          <div className="space-y-6 mt-6 ">
            {projects.map((project, index) => (
              <div className="space-y-3" key={index}>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2 flex-wrap">
                  {project.link ? (
                    <a
                      className={cn(
                        'inline-flex items-center gap-1.5 text-foreground font-medium text-sm',
                        'hover:text-accent transition-colors duration-200',
                        'group/project',
                      )}
                      href={project.link}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {project.name}
                      <ExternalLink className="w-3 h-3 opacity-60 group-hover/project:opacity-100 transition-opacity" />
                    </a>
                  ) : (
                    <span className="text-foreground font-medium text-sm">{project.name}</span>
                  )}
                  <Minus className="hidden lg:inline text-muted-foreground" />
                  <span className="text-muted-foreground text-sm">{project.role}</span>
                </div>
                <ul className="space-y-1.5">
                  {project.bullets.map((point, i) => (
                    <li
                      className="flex items-start gap-2 text-muted-foreground text-sm leading-relaxed"
                      key={i}
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-muted-foreground/40 flex-shrink-0" />
                      <span className="flex-1">{point}</span>
                    </li>
                  ))}
                </ul>
                {project.skills.length > 0 ? (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.skills.map((skill, i) => (
                      <span
                        className="text-xs px-2.5 py-1 rounded-md font-medium bg-muted/50 text-muted-foreground border border-muted-foreground/10"
                        key={i}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        ) : null}

        {/* Skills */}
        {skills.length > 0 ? (
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-muted/30">
            {skills.map((skill, i) => (
              <span
                className="text-xs px-2.5 py-1 rounded-md font-medium bg-muted/50 text-muted-foreground border border-muted-foreground/10"
                key={i}
              >
                {skill}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default WorkExperienceItem;
