import { PropsWithChildren } from "react";
import Box from "@mui/material/Box";

import { useAuthStore } from "@/entities/auth";

import { AppBar } from "./app-bar";
import { AppMain } from "./app-main";
import { AppSidebar } from "./app-sidebar";

export const AppLayout = ({ children }: PropsWithChildren) => {
  const isAuth = useAuthStore((state) => Boolean(state.authData));

  if (isAuth) {
    return (
      <Box sx={{ display: "flex" }}>
        <AppBar />
        <AppSidebar />
        <AppMain>{children}</AppMain>
      </Box>
    );
  }

  return <AppMain>{children}</AppMain>;
};
