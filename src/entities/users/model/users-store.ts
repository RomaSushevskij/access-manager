import { create } from "zustand";

import { TUser } from "./types";
import { mockUsers } from "./mock-users";

type TUsersState = {
  users: TUser[];
};

type TUsersActions = {
  updateUserRole: (userId: TUser["id"], userRole: TUser["role"]) => void;
  updateUserAccessLevel: (userId: TUser["id"], userAccessLevel: TUser["accessLevel"]) => void;
  deleteUser: (userId: TUser["id"]) => void;
};

export const useUsersStore = create<TUsersState & TUsersActions>((setState) => {
  return {
    users: mockUsers,
    updateUserRole: (userId, userRole) => {
      setState((state) => ({
        users: state.users.map((user) => {
          if (user.id === userId) {
            return { ...user, role: userRole };
          }

          return user;
        }),
      }));
    },
    updateUserAccessLevel: (userId, userAccessLevel) => {
      setState((state) => ({
        users: state.users.map((user) => {
          if (user.id === userId) {
            return { ...user, accessLevel: userAccessLevel };
          }

          return user;
        }),
      }));
    },
    deleteUser: (userId) => {
      setState((state) => ({
        users: state.users.filter((user) => {
          return user.id !== userId;
        }),
      }));
    },
  };
});
