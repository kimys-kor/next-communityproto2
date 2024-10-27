import { create } from "zustand";

type UserInfo = {
  username: string;
  phoneNum: string;
  fullName: string;
  nickname: string;
  point: number;
  status: string;
  role: string;
  sck?: string;
};

type UserStore = {
  userInfo: UserInfo | null;
  setUserInfo: (userInfo: UserInfo | null) => void;
  clearUserInfo: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
  userInfo: null,
  setUserInfo: (userInfo) => set({ userInfo }),
  clearUserInfo: () => set({ userInfo: null }),
}));
