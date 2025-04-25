import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

import { TUser } from "@/entities/users";

import { authStorageManager } from "../lib/auth-slorage-manager";

type TAuthState = {
  authData: TUser | null;
  error: string | null;
};

type TAuthAction = {
  signIn: (args: { login: string; password: string }) => void;
  signOut: () => void;
};

const CREDENTIALS = {
  admin: "admin",
  password: "12345",
};

export const useAuthStore = create<TAuthState & TAuthAction>((setState) => {
  return {
    authData: authStorageManager.getData(),
    error: null,
    signIn: ({ login, password }) => {
      if (login.trim() !== CREDENTIALS.admin || password.trim() !== CREDENTIALS.password) {
        setState({ error: "Неправильные логин или пароль" });

        return;
      }

      const authData: TUser = {
        id: uuidv4(),
        name: "Admin",
        email: "admin.admin@example.com",
        role: "admin",
        accessLevel: "5",
      };

      setState({ authData, error: null });
      authStorageManager.setData(authData);
    },
    signOut: () => {
      setState({ authData: null });
      authStorageManager.removeData();
    },
  };
});
