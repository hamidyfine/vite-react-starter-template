import { create } from 'zustand';

interface GlobalStore {
    bears: number;
    increasePopulation: () => void;
    removeAllBears: () => void;
    updateBears: (by: number) => void;
}

export const useStoreGlobal = create<GlobalStore>((set) => ({
    bears: 0,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
    updateBears: (newBears) => set({ bears: newBears }),
}));
