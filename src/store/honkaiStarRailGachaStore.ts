import { create } from "zustand";
import { persist } from "zustand/middleware";

interface useHonkaiStarRailGhachaState {
  characters: any[];
  setCharacters: (data: any[]) => void;
}

const useHonkaiStarRailGhachaStore = create<useHonkaiStarRailGhachaState>()(
  persist(
    (set) => ({
      characters: [],
      setCharacters: (data: any[]) =>
        set(() => ({
          characters: data,
        })),
    }),
    {
      name: "honkai-gacha",
    },
  ),
);

export default useHonkaiStarRailGhachaStore;
