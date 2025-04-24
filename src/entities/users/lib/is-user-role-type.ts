import { TUser } from "@/entities/users";

export const isUserRoleType = (userRole: unknown): userRole is TUser["role"] => {
  return userRole === "analyst" || userRole === "operator" || userRole === "admin";
};
