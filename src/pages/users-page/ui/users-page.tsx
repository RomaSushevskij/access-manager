import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { UserCard, useUsersStore } from "@/entities/users";
import { DeleteUserBtn } from "@/features/users/delete";
import { EditUserAccessLevelSelect, EditUserRoleSelect } from "@/features/users/update";

import { UsersGrid } from "./users-grid";

export const UsersPage = () => {
  const { users } = useUsersStore();

  return (
    <Box>
      <Typography variant={"h5"} component={"h1"} sx={{ mb: 3 }}>
        {"Пользователи"}
      </Typography>

      <UsersGrid>
        {users.map((user) => {
          return (
            <UserCard
              key={user.id}
              user={user}
              editRoleSlot={<EditUserRoleSelect user={user} />}
              editAccessLevelSlot={<EditUserAccessLevelSelect user={user} />}
              deleteUserSlot={<DeleteUserBtn userId={user.id} />}
            />
          );
        })}
      </UsersGrid>
    </Box>
  );
};
