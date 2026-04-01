# AGENTS.md

This repository is a single-page portfolio site built with Vite, React 19, TypeScript, and Tailwind CSS.

## Goal

Keep the site fast, minimal, and easy to maintain. Most changes will be one of:

- content updates to portfolio sections
- styling and layout refinement
- interaction updates for scroll-based navigation
- performance and polish work for the landing page

## Commands

Use Yarn in this project.

- `yarn dev` starts the Vite dev server
- `yarn build` runs TypeScript build checks and creates a production bundle
- `yarn lint` runs ESLint
- `yarn format` runs Prettier

There is currently no automated test suite in the repo.

## Project Structure

- `src/main.tsx`: app bootstrap and Vercel analytics/speed insights
- `src/App.tsx`: top-level app component, installs scroll observer
- `src/pages/LandingPage.tsx`: main page composition
- `src/components/landing`: page sections and layout
- `src/components/common`: shared page shell pieces like the layout wrapper and mobile scroll-to-top button
- `src/components/particles`: animated background setup
- `src/hooks`: scroll state, section navigation, and observer logic
- `src/index.css`: global theme tokens, utility styles, and visual system defaults
- `src/lib/utils.ts`: shared utility helpers

## Architecture Notes

- This app does not use React Router. It is a single landing page with section-based navigation.
- The left side contains navigation and profile content. The right side is the main scrollable section container.
- Section navigation is coordinated by:
  - `src/hooks/useActiveSectionStore.ts`
  - `src/hooks/useSection.ts`
  - `src/hooks/useScrollObserver.ts`
- If you add, remove, or rename a section, update the section IDs and mappings consistently across the hooks and components.
- The `@` import alias points to `src` and is configured in both `vite.config.ts` and `tsconfig.json`.

## Styling Guidance

- Prefer preserving the existing visual language unless the task explicitly asks for a redesign.
- Global styling and theme values live mostly in `src/index.css`.
- Tailwind is available, but important tokens and custom utilities are centralized in CSS rather than Tailwind config.
- The animated particles background is part of the page shell, so changes to layout or stacking should be checked against it.

## Editing Guidance

- Prefer small, targeted changes over broad refactors.
- Keep content changes localized to the relevant landing page section components.
- Avoid introducing routing, state libraries, or abstractions that do not materially improve this small app.
- Preserve accessibility basics for interactive elements: labels, button types, keyboard behavior, and visible focus states.
- Be careful with scroll behavior. Programmatic scrolling and observer-driven active state are intentionally coordinated to avoid feedback loops.

## Verification

For code changes, run:

1. `yarn lint`
2. `yarn build`

For UI changes, also verify the affected section in the browser and confirm:

- desktop layout still works
- mobile layout still works
- section navigation still highlights and scrolls correctly
- particles/background layering is not broken

## Good Starting Points

- Start at `src/App.tsx` and `src/pages/LandingPage.tsx` to understand composition.
- Read the hooks in `src/hooks` before changing section navigation behavior.
- Go to `src/index.css` before making broad design or theme updates.
