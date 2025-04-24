import { userRolesMapper } from "../lib/user-roles-mapper";

type TUserRole = keyof typeof userRolesMapper;

export type TUser = {
  id: string;
  name: string;
  email: string;
  role: TUserRole;
  accessLevel: "1" | "2" | "3" | "4" | "5";
};
