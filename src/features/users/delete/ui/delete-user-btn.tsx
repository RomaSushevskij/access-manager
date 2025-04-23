import Button from "@mui/material/Button";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import { TUser, useUsersStore } from "@/entities/users";

export const DeleteUserBtn = ({ userId }: { userId: TUser["id"] }) => {
  const { deleteUser } = useUsersStore();

  const handleDeleteUser = () => {
    deleteUser(userId);
  };

  return (
    <Button
      startIcon={<DeleteOutlineIcon />}
      color={"error"}
      sx={{ textTransform: "none", fontWeight: 600 }}
      onClick={handleDeleteUser}
    >
      Удалить пользователя
    </Button>
  );
};
