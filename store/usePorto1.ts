"use client";

import { create } from "zustand";

type Porto1State = {
  nav: boolean;
  toggleNav: () => void;
  hideNav: () => void;
};

export const usePorto1 = create<Porto1State>((set) => ({
  nav: false,
  toggleNav: () => set((state) => ({ nav: !state.nav })),
  hideNav: () => set({ nav: false }),
}));
