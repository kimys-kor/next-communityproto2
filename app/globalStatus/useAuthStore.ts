import { create } from "zustand";

type authStore = {
  accessToken: string;
  setAccessToken: (newToken: string) => void;
};

export const useAuthStore = create<authStore>((set) => ({
  accessToken: "",
  setAccessToken: (newToken) =>
    set((state) => ({
      accessToken: newToken,
    })),
}));
