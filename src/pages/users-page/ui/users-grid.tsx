import { PropsWithChildren } from "react";
import Stack from "@mui/material/Stack";

export const UsersGrid = ({ children }: PropsWithChildren) => {
  return (
    <Stack
      sx={{ flexGrow: 1 }}
      display={"grid"}
      gridTemplateColumns={"repeat(auto-fit, minmax(19.375rem, 1fr))"}
      gap={4}
    >
      {children}
    </Stack>
  );
};
