import Button from "@mui/material/Button";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDialogs } from "@toolpad/core/useDialogs";

import { TUser, useUsersStore } from "@/entities/users";

export const DeleteUserBtn = ({ userId }: { userId: TUser["id"] }) => {
  const dialogs = useDialogs();
  const { deleteUser } = useUsersStore();

  const handleDeleteUser = async () => {
    const isDeleteConfirmed = await dialogs.confirm(
      "Вы уверены, что хотите удалить пользователя?",
      {
        okText: "Удалить",
        cancelText: "Отмена",
        title: "",
      },
    );

    if (isDeleteConfirmed) {
      deleteUser(userId);
    }
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
