import React from 'react';

export const WorkExperienceSection: React.FC = () => {
  return (
    <section className="flex flex-col gap-6" id="work-experience">
      <div>
        <h1 className="text-xs font-bold text-muted-foreground opacity-70 leading-8">
          WORK EXPERIENCE
        </h1>
        <div className="border-t border-muted-foreground w-full h-1 mt-1" />
      </div>

      <div className="space-y-10">
        {/* Job 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-x-6">
          <p className="text-sm text-muted-foreground">2022 — Present</p>
          <div>
            <p className="text-foreground font-semibold">
              Full-Stack Developer — AtraX Software Solutions
            </p>
            <p className="text-muted-foreground mt-2 text-pretty">
              Led frontend architecture for Remy, a cross-platform food waste management app. Built
              reusable components, integrated AWS services, and implemented CI/CD pipelines on Azure
              DevOps. Delivered a seamless experience across mobile and web using React, React
              Native, and NestJS.
            </p>
          </div>
        </div>

        {/* Job 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-x-6">
          <p className="text-sm text-muted-foreground">2020 — 2021</p>
          <div>
            <p className="text-foreground font-semibold">
              WordPress Developer — Spontan Creative Media
            </p>
            <p className="text-muted-foreground mt-2 text-pretty">
              Developed pixel-perfect websites from Figma designs, creating custom themes and
              templates. Ensured responsive layouts, fast load times, and SEO best practices.
            </p>
          </div>
        </div>

        {/* Job 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-x-6">
          <p className="text-sm text-muted-foreground">2019 — 2020</p>
          <div>
            <p className="text-foreground font-semibold">IT Specialist — Albania State Police</p>
            <p className="text-muted-foreground mt-2 text-pretty">
              Maintained networks and servers in a secure government environment. Provided
              system-level support, troubleshooting infrastructure issues, and ensuring system
              uptime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
