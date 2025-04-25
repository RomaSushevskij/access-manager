import Button from "@mui/material/Button";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDialogs } from "@toolpad/core/useDialogs";

import { TUser, useUsersStore } from "@/entities/users";
import { useLogsStore } from "@/entities/logs";
import { useAuthStore } from "@/entities/auth";

export const DeleteUserBtn = ({ user }: { user: TUser }) => {
  const dialogs = useDialogs();
  const { deleteUser } = useUsersStore();
  const { addLog } = useLogsStore();
  const { authData } = useAuthStore();

  const handleDeleteUser = async () => {
    const isDeleteConfirmed = await dialogs.confirm(
      "Вы уверены, что хотите удалить пользователя?",
      {
        okText: "Удалить",
        cancelText: "Отмена",
        title: "",
      },
    );

    if (isDeleteConfirmed && authData) {
      deleteUser(user.id);

      addLog({
        initiatorUserName: authData.name,
        targetUserName: user.name,
        action: "deleteUser",
      });
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
