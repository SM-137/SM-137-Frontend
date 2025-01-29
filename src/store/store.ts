import { create } from "zustand";
import { ComplaintForm } from "../types/Type";

const useComplaintStore = create<ComplaintForm>((set) => ({
  title: "",
  contentProb: "",
  contentDir: "",
  contentExpect: "",
  categoryName: "",
  tagName: "",
  attachment: null,
  setTitle: (title) => set({ title }),
  setContentProb: (contentProb) => set({ contentProb }),
  setContentDir: (contentDir) => set({ contentDir }),
  setContentExpect: (contentExpect) => set({ contentExpect }),
  setCategoryName: (categoryName) => set({ categoryName }),
  setTagName: (tagName) => set({ tagName }),
  setAttachment: (update: (prev: File[]) => File[]) =>
    set((state) => ({ attachments: update(state.attachments) })),
}));

export default useComplaintStore;
