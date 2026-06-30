import { create } from "zustand";

interface AudioState {
  isMuted: boolean;
  toggleMute: () => void;
  setIsMuted: (muted: boolean) => void;
}

export const useAudioStore = create<AudioState>((set) => ({
  isMuted: false,
  toggleMute: () => set((state) => ({ isMuted: !state.isMuted })),
  setIsMuted: (muted) => set({ isMuted: muted }),
}));
