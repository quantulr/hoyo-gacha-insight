import { create } from "zustand";

interface useHonkaiStarRailGhachaState {
  characters: any[];
  setCharacters: (data: any[]) => void;
}

const useHonkaiStarRailGhachaStore = create<useHonkaiStarRailGhachaState>()(
  (set) => ({
    characters: [],
    setCharacters: (data: any[]) =>
      set(() => ({
        characters: data,
      })),
  }),
);

export default useHonkaiStarRailGhachaStore;
