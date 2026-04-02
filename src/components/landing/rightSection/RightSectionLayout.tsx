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
    <section className="flex flex-col gap-10 overflow-y-auto scroll-smooth pb-24 text-muted-foreground text-pretty no-scrollbar lg:gap-12">
      {aboutContent}
      {workExperienceContent}
      {contactContent}
    </section>
  );
};
