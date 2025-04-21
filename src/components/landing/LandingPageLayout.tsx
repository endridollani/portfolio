import React from 'react';
import { PageLayout } from '@/components/common/PageLayout';

interface LandingPageLayoutProps {
  rightContent: React.ReactNode;
  leftContent: React.ReactNode;
}

export const LandingPageLayout: React.FC<LandingPageLayoutProps> = ({
  rightContent,
  leftContent,
}) => (
  <PageLayout>
    <div className="flex lg:flex-row lg:justify-center lg:h-screen flex-col px-12">
      <div className="flex items-start gap-4 w-3/4 flex-col lg:flex-row">
        <div className="lg:flex-1 lg:py-24 lg:relative py-15">
          <div className="lg:fixed lg:bottom-24 lg:top-24 ">{leftContent}</div>
        </div>
        <div className="flex-1 pt-24 px-12">{rightContent}</div>
      </div>
    </div>
  </PageLayout>
);
