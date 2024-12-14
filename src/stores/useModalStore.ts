import { create } from "zustand";

interface ModalStore {
  filter: string;
  setFilter: (filter: string) => void;
  isModalOpen: boolean;
  setModalOpen: (isOpen: boolean) => void;
  isDeleteConfirmModalOpen: boolean;
  setDeleteConfirmModalOpen: (isOpen: boolean) => void;
}

const useModalStore = create<ModalStore>(function (set) {
  return {
    filter: "",
    setFilter: function (filter) {
      set({ filter });
    },
    isModalOpen: false,
    setModalOpen: function (isOpen) {
      set({ isModalOpen: isOpen });
    },
    isDeleteConfirmModalOpen: false,
    setDeleteConfirmModalOpen: function (isOpen) {
      set({ isDeleteConfirmModalOpen: isOpen });
    },
  };
});

export default useModalStore;
