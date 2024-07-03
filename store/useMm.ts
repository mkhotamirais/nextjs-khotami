"use client";

import { create } from "zustand";

type MmState = {
  mm: boolean;
  heroBtn: boolean;
  toggleMm: () => void;
  hideMm: () => void;
  toggleHeroBtn: () => void;
  hideHeroBtn: () => void;
  showHeroBtn: () => void;
};

export const useMm = create<MmState>((set) => ({
  mm: false,
  heroBtn: true,
  toggleMm: () => set((state) => ({ mm: !state.mm })),
  hideMm: () => set({ mm: false }),
  toggleHeroBtn: () => set((state) => ({ heroBtn: !state.heroBtn })),
  hideHeroBtn: () => set({ heroBtn: false }),
  showHeroBtn: () => set({ heroBtn: true }),
}));
