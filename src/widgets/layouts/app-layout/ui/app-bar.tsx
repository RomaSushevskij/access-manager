import { useNavigate } from "react-router-dom";
import Bar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import BadgeIcon from "@mui/icons-material/Badge";

import { AppRoutes, RoutePath } from "@/shared/config/routeConfig";
import Stack from "@mui/material/Stack";

export const AppBar = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate(RoutePath.getPath(AppRoutes.MAIN));
  };

  return (
    <Bar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          gap={1}
          role={"link"}
          onClick={handleLogoClick}
          flexGrow={1}
          sx={{ cursor: "pointer" }}
        >
          <BadgeIcon />
          <Typography textTransform={"uppercase"} variant={"h6"}>
            {"Система управления доступом"}
          </Typography>
        </Stack>
      </Toolbar>
    </Bar>
  );
};
