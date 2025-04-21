/* eslint-disable no-unused-vars */
import { create } from 'zustand';

export enum SectionEnum {
  ABOUT = 'ABOUT',
  WORK_EXPERIENCE = 'WORK EXPERIENCE',
  CONTACT = 'CONTACT',
}

type State = {
  activeSection: SectionEnum;
};

type Action = {
  setActiveSection: (section: SectionEnum) => void;
};

export const useActiveSectionStore = create<State & Action>(set => ({
  activeSection: SectionEnum.ABOUT,
  setActiveSection: (section: SectionEnum) => set({ activeSection: section }),
}));
