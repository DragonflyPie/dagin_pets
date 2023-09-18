import { create } from "zustand";

interface ModalState {
  isOpen: boolean;
  closeModal: () => void;
  openModal: () => void;
}

const useModalStore = create<ModalState>()((set) => ({
  isOpen: false,
  closeModal: () => set((state) => ({ isOpen: false })),
  openModal: () => set((state) => ({ isOpen: true })),
}));

export default useModalStore;
