import { TUser } from "@/entities/users";

export const isUserAccessLevelType = (
  userAccessLevel: unknown,
): userAccessLevel is TUser["accessLevel"] => {
  return (
    userAccessLevel === "1" ||
    userAccessLevel === "2" ||
    userAccessLevel === "3" ||
    userAccessLevel === "4" ||
    userAccessLevel === "5"
  );
};
