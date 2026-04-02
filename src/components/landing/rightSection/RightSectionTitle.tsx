import { SectionEnum } from '@/hooks';
import React from 'react';

interface RightSectionTitleProps {
  section: SectionEnum;
}

const RightSectionTitle: React.FC<RightSectionTitleProps> = ({ section }) => {
  return (
    <div className="space-y-3">
      <h2 className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-accent/85">
        {section}
      </h2>
      <div className="h-px w-16 bg-gradient-to-r from-accent/70 to-transparent" />
    </div>
  );
};

export default RightSectionTitle;
