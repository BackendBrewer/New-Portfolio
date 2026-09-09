import { create } from "zustand";

interface CommandPaletteStore {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const useCommandPalette = create<CommandPaletteStore>((set) => ({
  open: false,
  setOpen: (open) => set({ open }),
}));