import { create } from "zustand";
import { ComplaintForm } from "../types/Type";

const useComplaintStore = create<ComplaintForm>((set) => ({
  title: "",
  contentProb: "",
  contentDir: "",
  contentExpect: "",
  categoryName: "",
  tagName: "",
  setTitle: (title) => set({ title }),
  setContentProb: (contentProb) => set({ contentProb }),
  setContentDir: (contentDir) => set({ contentDir }),
  setContentExpect: (contentExpect) => set({ contentExpect }),
  setCategoryName: (categoryName) => set({ categoryName }),
  setTagName: (tagName) => set({ tagName }),
}));

export default useComplaintStore;
