import { TUser, UserAccessLevelSelect, useUsersStore } from "@/entities/users";
import { useLogsStore } from "@/entities/logs";
import { useAuthStore } from "@/features/auth";

export const EditUserAccessLevelSelect = ({ user }: { user: TUser }) => {
  const { updateUserAccessLevel } = useUsersStore();
  const { addLog } = useLogsStore();
  const { authData } = useAuthStore();

  const handleUpdateUserAccessLevel = (newUserAccessLevel: TUser["accessLevel"]) => {
    updateUserAccessLevel(user.id, newUserAccessLevel);

    if (!authData) return;

    addLog({
      initiatorUserName: authData.name,
      targetUserName: user.name,
      action: "editUserAccessLevel",
      oldValue: user.accessLevel,
      newValue: newUserAccessLevel,
    });
  };

  return (
    <UserAccessLevelSelect
      value={user.accessLevel}
      userId={user.id}
      onChange={handleUpdateUserAccessLevel}
    />
  );
};
