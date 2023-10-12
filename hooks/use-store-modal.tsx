import { create } from "zustand";

type useStoreModalProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useStoreModal = create<useStoreModalProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
