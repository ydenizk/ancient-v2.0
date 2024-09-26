import { create } from "zustand";

//stairs nav menu open-close
export const useNavStore = create((set) => ({
    isNavOpen: false,
     openNav: () => set({ isNavOpen: true }),
     closeNav: () => set({ isNavOpen: false }),
   }));

   //tab-regions-map&pics components
   export const useRegionStore = create((set) => ({
    hoveredRegion: null,
    setHoveredRegion: (region) => set({ hoveredRegion: region }),
  }));



  