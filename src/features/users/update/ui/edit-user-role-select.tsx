import { TUser, UserRoleSelect, useUsersStore } from "@/entities/users";

export const EditUserRoleSelect = ({ user }: { user: TUser }) => {
  const { updateUserRole } = useUsersStore();

  const handleUpdateUserRole = (newUserRole: TUser["role"]) => {
    updateUserRole(user.id, newUserRole);
  };

  return <UserRoleSelect value={user.role} onChange={handleUpdateUserRole} userId={user.id} />;
};
