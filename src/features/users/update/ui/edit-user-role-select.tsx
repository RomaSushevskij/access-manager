import { TUser, UserRoleSelect, useUsersStore } from "@/entities/users";
import { useLogsStore } from "@/entities/logs";
import { useAuthStore } from "@/features/auth";

export const EditUserRoleSelect = ({ user }: { user: TUser }) => {
  const { updateUserRole } = useUsersStore();
  const { addLog } = useLogsStore();
  const { authData } = useAuthStore();

  const handleUpdateUserRole = (newUserRole: TUser["role"]) => {
    updateUserRole(user.id, newUserRole);

    if (!authData) return;

    addLog({
      initiatorUserName: authData.name,
      targetUserName: user.name,
      action: "editUserRole",
      oldValue: user.role,
      newValue: newUserRole,
    });
  };

  return <UserRoleSelect value={user.role} onChange={handleUpdateUserRole} userId={user.id} />;
};
