import { SectionEnum } from '@/hooks';
import { Check, Copy } from 'lucide-react';
import React, { useState } from 'react';
import RightSectionTitle from './RightSectionTitle';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'endri@endridollani.dev';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <section className="flex flex-col gap-4 lg:pb-[10rem]" id="section-contact">
      <RightSectionTitle section={SectionEnum.CONTACT} />
      <p className="text-xs lg:text-sm leading-relaxed">
        If you&apos;d like to get in touch, feel free to reach out via email at{' '}
        <span className="inline-flex items-center gap-1.5">
          <a
            className="text-primary underline underline-offset-4 decoration-1 font-medium"
            href="mailto:endri@endridollani.dev"
          >
            {email}
          </a>
          <button
            aria-label="Copy email address"
            className="cursor-pointer inline-flex items-center justify-center p-1 rounded hover:bg-muted/50 transition-colors duration-200 group"
            onClick={handleCopy}
            type="button"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-accent" />
            ) : (
              <Copy className="w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground transition-colors" />
            )}
          </button>
        </span>
      </p>
    </section>
  );
};
