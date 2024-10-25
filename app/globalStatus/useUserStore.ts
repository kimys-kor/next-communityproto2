import { create } from "zustand";

interface UserData {
  username: string;
  phoneNum: string;
  fullName: string;
  nickname: string;
  point: number;
  status: string;
  role: string;
}

interface UserStore {
  user: UserData | null;
  setUser: (userData: UserData) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (userData) => set({ user: userData }),
  clearUser: () => set({ user: null }),
}));
