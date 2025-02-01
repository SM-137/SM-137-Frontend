import { create } from "zustand";
import { UserInfoStateType } from "../types/Type";

const useUserInfoStore = create<UserInfoStateType>((set) => ({
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
