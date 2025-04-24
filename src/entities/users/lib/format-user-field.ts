import { isUserRoleType } from "../lib/is-user-role-type";
import { isUserAccessLevelType } from "../lib/is-user-access-level-type";
import { userRolesMapper } from "../lib/user-roles-mapper";

export const formatUserField = (value: unknown) => {
  if (isUserRoleType(value)) {
    return userRolesMapper[value];
  }

  if (isUserAccessLevelType(value)) {
    return value;
  }

  return value;
};
