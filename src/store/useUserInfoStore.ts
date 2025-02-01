import { create } from "zustand";
import { UserInfoType } from "../types/Type";

const useUserInfoStore = create<UserInfoType>((set) => ({
  name: "",
  department: "",
  email: "",
  number: "",
  setName: (name: string) => set({ name }),
  setDepartment: (department: string) => set({ department }),
  setEmail: (email: string) => set({ email }),
  setNumber: (number: string) => set({ number }),
}));

export default useUserInfoStore;
