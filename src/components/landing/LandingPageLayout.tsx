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
    <div className="flex lg:flex-row lg:justify-center lg:h-screen flex-col px-6 md:px-12">
      <div className="flex items-start gap-4 flex-col lg:flex-row w-full lg:w-3/4 ">
        <div className="lg:flex-1 lg:py-24 lg:relative pt-12 pb-8">
          <div className="lg:fixed lg:bottom-24 lg:top-24">{leftContent}</div>
        </div>
        <div className="flex-1 lg:pt-24 lg:px-12">{rightContent}</div>
      </div>
    </div>
  </PageLayout>
);
