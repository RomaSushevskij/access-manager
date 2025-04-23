import { PropsWithChildren } from "react";
import Box from "@mui/material/Box";

import { AppBar } from "./app-bar";
import { AppMain } from "./app-main";
import { AppSidebar } from "./app-sidebar";

export const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar />
      <AppSidebar />
      <AppMain>{children}</AppMain>
    </Box>
  );
};
