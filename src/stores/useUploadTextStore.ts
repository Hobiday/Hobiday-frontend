import { create } from "zustand";

interface TextStore {
  text: string;
  setText: (newText: string) => void;
}

const useUploadTextStore = create<TextStore>((set) => ({
  text: "",
  setText: (newText) => set({ text: newText }),
}));

export default useUploadTextStore;
