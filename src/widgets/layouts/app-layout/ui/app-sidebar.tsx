import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

import { AppRoutes, RoutePath } from "@/shared/config/routeConfig";

import { APP_DRAWER_WIDTH } from "../constants";
import { AppNavLink } from "./app-nav-link";

export const AppSidebar = () => {
  return (
    <Drawer
      open
      sx={{
        width: APP_DRAWER_WIDTH,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: APP_DRAWER_WIDTH,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
      <Box sx={{ py: 1, px: 2 }}>
        <AppNavLink to={RoutePath.getPath(AppRoutes.MAIN)}>{"Пользователи"}</AppNavLink>
      </Box>
      <Box sx={{ py: 1, px: 2 }}>
        <AppNavLink to={RoutePath.getPath(AppRoutes.LOGS)}>{"Логи"}</AppNavLink>
      </Box>
    </Drawer>
  );
};
