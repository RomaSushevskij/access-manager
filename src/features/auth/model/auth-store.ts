import { create } from "zustand";

import { TUser } from "@/entities/users";
import { mockUsers } from "@/entities/users/model/mock-users";

import { authStorageManager } from "../lib/auth-slorage-manager";

type TAuthState = {
  authData: TUser | null;
  signIn: (args: { login: string; password: string }) => void;
  signOut: () => void;
  error: string | null;
};

export const useAuthStore = create<TAuthState>((setState) => {
  return {
    authData: authStorageManager.getData(),
    error: null,
    signIn: ({ login, password }) => {
      if (login.trim() !== "admin" || password.trim() !== "12345") {
        setState({ error: "Неправильные логин или пароль" });

        return;
      }

      setState({ authData: mockUsers[0], error: null });
      authStorageManager.setData(mockUsers[0]);
    },
    signOut: () => {
      setState({ authData: null });
      authStorageManager.setData(null);
    },
  };
});
