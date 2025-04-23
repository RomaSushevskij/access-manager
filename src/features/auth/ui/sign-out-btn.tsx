import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDialogs } from "@toolpad/core/useDialogs";

import { useAuthStore } from "@/features/auth";

export const SignOutBtn = () => {
  const { signOut } = useAuthStore();
  const dialogs = useDialogs();

  const handleBtnClick = async () => {
    const isSignOutConfirmed = await dialogs.confirm("Вы уверены, что хотите выйти?", {
      okText: "Выйти",
      cancelText: "Отмена",
      title: "",
    });

    if (isSignOutConfirmed) {
      signOut();
    }
  };

  return (
    <IconButton onClick={handleBtnClick}>
      <LogoutIcon sx={{ color: "white" }} />
    </IconButton>
  );
};
