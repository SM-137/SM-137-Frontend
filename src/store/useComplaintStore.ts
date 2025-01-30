import { create } from "zustand";
import { ComplaintForm } from "../types/Type";

const storedCategory = sessionStorage.getItem("category");
const storedTitle = sessionStorage.getItem("title");
const storeContentProb = sessionStorage.getItem("contentProb");
const storeContentDir = sessionStorage.getItem("contentDir");
const storeContentExpect = sessionStorage.getItem("contentExpect");

const useComplaintStore = create<ComplaintForm>((set) => ({
  title: storedTitle ? storedTitle : "",
  contentProb: storeContentProb ? storeContentProb : "",
  contentDir: storeContentDir ? storeContentDir : "",
  contentExpect: storeContentExpect ? storeContentExpect : "",
  categoryName: storedCategory ? storedCategory : "",
  tagName: "",
  attachments: [],

  setTitle: (title) => set({ title }),
  setContentProb: (contentProb) => set({ contentProb }),
  setContentDir: (contentDir) => set({ contentDir }),
  setContentExpect: (contentExpect) => set({ contentExpect }),
  setCategoryName: (categoryName) => set({ categoryName }),
  setTagName: (tagName) => set({ tagName }),
  setAttachment: (update: (prev: File[] | null) => File[] | null) =>
    set((state) => ({ attachments: update(state.attachments) })),
}));

export default useComplaintStore;
