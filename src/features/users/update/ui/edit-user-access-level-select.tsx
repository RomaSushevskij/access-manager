import { TUser, UserAccessLevelSelect, useUsersStore } from "@/entities/users";

export const EditUserAccessLevelSelect = ({ user }: { user: TUser }) => {
  const { updateUserAccessLevel } = useUsersStore();

  const handleUpdateUserAccessLevel = (newUserAccessLevel: TUser["accessLevel"]) => {
    updateUserAccessLevel(user.id, newUserAccessLevel);
  };

  return (
    <UserAccessLevelSelect
      value={user.accessLevel}
      userId={user.id}
      onChange={handleUpdateUserAccessLevel}
    />
  );
};
