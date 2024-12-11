"use client";

import { createContext, ReactNode, useContext, useState } from "react";

type BottomSheetContextType = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const BottomSheetContext = createContext<BottomSheetContextType | undefined>(undefined);

export function BottomSheetProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return <BottomSheetContext.Provider value={{ isOpen, open, close }}>{children}</BottomSheetContext.Provider>;
}

export function useBottomSheet() {
  const context = useContext(BottomSheetContext);
  if (!context) {
    throw new Error("Error! Use within a BottomSheetProvider");
  }
  return context;
}
