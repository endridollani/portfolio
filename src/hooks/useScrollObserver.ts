import { useEffect, useRef } from 'react';
import { SectionEnum, useActiveSectionStore } from './useActiveSectionStore';

export const sectionMap: Record<string, SectionEnum> = {
  'section-about': SectionEnum.ABOUT,
  'section-work-experience': SectionEnum.WORK_EXPERIENCE,
  'section-contact': SectionEnum.CONTACT,
};

export const useScrollObserver = () => {
  const { setActiveSection, isProgrammaticScroll } = useActiveSectionStore();
  const isProgrammaticScrollRef = useRef(isProgrammaticScroll);

  // Keep ref in sync with store value
  useEffect(() => {
    isProgrammaticScrollRef.current = isProgrammaticScroll;
  }, [isProgrammaticScroll]);

  useEffect(() => {
    // Find the scrollable container by looking for sections with IDs
    const findContainer = (): HTMLElement | null => {
      // First, find a section with an ID
      const sectionWithId = document.querySelector('section[id^="section-"]') as HTMLElement;
      if (sectionWithId) {
        // Find its parent that has overflow-y-auto
        let parent = sectionWithId.parentElement;
        while (parent) {
          const styles = window.getComputedStyle(parent);
          if (styles.overflowY === 'auto' || styles.overflowY === 'scroll') {
            return parent as HTMLElement;
          }
          parent = parent.parentElement;
        }
        // If no scrollable parent found, use the parent of the section
        return sectionWithId.parentElement as HTMLElement;
      }
      return null;
    };

    const setupObserver = (container: HTMLElement) => {
      // Find all sections with IDs - they should be direct children or descendants
      const sections = Array.from(container.querySelectorAll('section[id^="section-"]'));

      // Fallback: try document-wide search if no sections found in container
      const sectionsToObserve =
        sections.length > 0
          ? sections
          : Array.from(document.querySelectorAll('section[id^="section-"]'));

      if (sectionsToObserve.length === 0) {
        return () => {}; // No sections found
      }

      const observer = new IntersectionObserver(
        entries => {
          // Don't update if we're programmatically scrolling
          if (isProgrammaticScrollRef.current) {
            return;
          }

          // Collect all intersecting entries
          const intersectingEntries = entries.filter(entry => entry.isIntersecting);

          if (intersectingEntries.length === 0) {
            return;
          }

          // Find the entry with the highest intersection ratio that's near the top
          let bestEntry: IntersectionObserverEntry | null = null;
          let bestScore = -1;

          intersectingEntries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            if (!id || !sectionMap[id]) {
              return;
            }

            const rootBounds = entry.rootBounds;
            const boundingRect = entry.boundingClientRect;

            if (!rootBounds) {
              // Fallback: use intersection ratio only
              const score = entry.intersectionRatio;
              if (score > bestScore) {
                bestScore = score;
                bestEntry = entry;
              }
              return;
            }

            // Calculate how far from the top of the container
            const topOffset = boundingRect.top - rootBounds.top;
            const containerHeight = rootBounds.height;

            // Score: higher intersection ratio is better, sections near top are better
            // Normalize topOffset to container height (0 = at top, 1 = at bottom)
            const normalizedTopOffset = Math.max(0, topOffset) / containerHeight;

            // Score combines intersection ratio (0-1) and position (0-1, lower is better)
            // Intersection ratio is weighted more heavily
            const score = entry.intersectionRatio * 2 - normalizedTopOffset;

            if (score > bestScore) {
              bestScore = score;
              bestEntry = entry;
            }
          });

          if (bestEntry !== null) {
            const id = (bestEntry as IntersectionObserverEntry).target.getAttribute('id');
            if (id && sectionMap[id]) {
              setActiveSection(sectionMap[id]);
            }
          }
        },
        {
          root: container,
          threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
          rootMargin: '0px 0px -50% 0px', // Consider sections in top 50% of viewport
        },
      );

      // Observe all sections
      sectionsToObserve.forEach(section => observer.observe(section));

      return () => observer.disconnect();
    };

    // Wait a bit for DOM to be ready
    let timeoutCleanup: (() => void) | undefined;
    const timeoutId = setTimeout(() => {
      const container = findContainer();
      if (container) {
        timeoutCleanup = setupObserver(container);
      }
    }, 100);

    // Also try immediately
    const container = findContainer();
    let cleanup: (() => void) | undefined;

    if (container) {
      cleanup = setupObserver(container);
    }

    return () => {
      clearTimeout(timeoutId);
      cleanup?.();
      timeoutCleanup?.();
    };
  }, [setActiveSection]);
};
