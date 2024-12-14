import { create } from "zustand";

interface TextStore {
  text: string;
  setText: (newText: string) => void;
}

const useTextStore = create<TextStore>((set) => ({
  text: "",
  setText: (newText) => set({ text: newText }),
}));

export default useTextStore;
