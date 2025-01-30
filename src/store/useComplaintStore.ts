import { create } from "zustand";
import { ComplaintForm } from "../types/Type";

const storedCategory = sessionStorage.getItem("category");
const storedTitle = sessionStorage.getItem("title");
const storeContentProb = sessionStorage.getItem("contentProb");
const storeContentDir = sessionStorage.getItem("contentDir");
const storeContentExpect = sessionStorage.getItem("contentExpect");
const rawFiles = sessionStorage.getItem("files");
const parsedFiles = rawFiles ? JSON.parse(rawFiles) : [];
const storedFiles = parsedFiles.map(
  (file: { name: string; size: number; type: string; lastModified: number }) =>
    new File([], file.name, {
      type: file.type,
      lastModified: file.lastModified,
    })
);

const useComplaintStore = create<ComplaintForm>((set) => ({
  title: storedTitle ? storedTitle : "",
  contentProb: storeContentProb ? storeContentProb : "",
  contentDir: storeContentDir ? storeContentDir : "",
  contentExpect: storeContentExpect ? storeContentExpect : "",
  categoryName: storedCategory ? storedCategory : "",
  tagName: "",
  attachments: storedFiles ? storedFiles : [],

  setTitle: (title) => set({ title }),
  setContentProb: (contentProb) => set({ contentProb }),
  setContentDir: (contentDir) => set({ contentDir }),
  setContentExpect: (contentExpect) => set({ contentExpect }),
  setCategoryName: (categoryName) => set({ categoryName }),
  setTagName: (tagName) => set({ tagName }),
  setAttachments: (update: (prev: File[] | null) => File[] | null) =>
    set((state) => ({ attachments: update(state.attachments) })),
}));

export default useComplaintStore;
