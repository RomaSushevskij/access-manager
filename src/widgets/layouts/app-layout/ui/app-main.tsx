import { PropsWithChildren } from "react";
import Box from "@mui/material/Box";

export const AppMain = ({ children }: PropsWithChildren) => {
  return (
    <Box
      flexGrow={1}
      component={"main"}
      sx={{ bgcolor: "grey.100", p: 3, pt: 12, height: "100dvh" }}
    >
      {children}
    </Box>
  );
};
