import { SectionEnum } from '@/hooks';
import React from 'react';
import RightSectionTitle from './RightSectionTitle';

export const ContactSection: React.FC = () => (
  <section className="flex flex-col gap-4" id="contact">
    <RightSectionTitle section={SectionEnum.CONTACT} />
    <p className="text-xs lg:text-sm leading-relaxed">
      I’m always open to discussing new projects, creative ideas, or opportunities to be part of
      your visions. If you’d like to get in touch, feel free to reach out via email at{' '}
      <a
        className="text-primary underline underline-offset-4 decoration-1"
        href="mailto:endri@endridollani.dev"
      >
        endri@endridollani.dev
      </a>
    </p>
  </section>
);
