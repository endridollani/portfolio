import { create } from 'zustand';

export enum SectionEnum {
  ABOUT = 'ABOUT ME',
  WORK_EXPERIENCE = 'WORK EXPERIENCE',
  CONTACT = 'CONTACT',
}

type State = {
  activeSection: SectionEnum;
  isProgrammaticScroll: boolean;
};

type Action = {
  setActiveSection: (section: SectionEnum) => void;
  setIsProgrammaticScroll: (value: boolean) => void;
};

export const useActiveSectionStore = create<State & Action>(set => ({
  activeSection: SectionEnum.ABOUT,
  isProgrammaticScroll: false,
  setActiveSection: (section: SectionEnum) => set({ activeSection: section }),
  setIsProgrammaticScroll: (value: boolean) => set({ isProgrammaticScroll: value }),
}));
