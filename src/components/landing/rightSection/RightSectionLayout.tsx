import React from 'react';

interface RightSectionLayoutProps {
  aboutContent: React.ReactNode;
  workExperienceContent: React.ReactNode;
  contactContent: React.ReactNode;
}

export const RightSectionLayout: React.FC<RightSectionLayoutProps> = ({
  aboutContent,
  workExperienceContent,
  contactContent,
}) => {
  return (
    <section className="pb-24 flex flex-col gap-4 text-muted-foreground text-pretty  overflow-y-auto scroll-smooth no-scrollbar">
      {aboutContent}
      {workExperienceContent}
      {contactContent}
    </section>
  );
};
