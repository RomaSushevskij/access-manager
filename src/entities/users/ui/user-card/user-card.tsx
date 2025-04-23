import { ReactElement } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import { TUser } from "../../model/types";

export const UserCard = ({
  user,
  editAccessLevelSlot,
  editRoleSlot,
  deleteUserSlot,
}: {
  user: TUser;
  editRoleSlot: ReactElement;
  editAccessLevelSlot: ReactElement;
  deleteUserSlot: ReactElement;
}) => {
  const { name, email } = user;

  return (
    <Card elevation={3}>
      <CardContent sx={{ display: "flex", flexDirection: "column" }}>
        <Typography gutterBottom variant="h6" component="h1">
          {name}
        </Typography>

        <Chip label={email} size="small" sx={{ alignSelf: "start" }} />
      </CardContent>

      <CardActions>
        <Stack flexDirection={"column"} rowGap={2} flexGrow={1}>
          <Box>{editRoleSlot}</Box>
          <Box>{editAccessLevelSlot}</Box>
          <Box sx={{ mt: 2, alignSelf: "end" }}>{deleteUserSlot}</Box>
        </Stack>
      </CardActions>
    </Card>
  );
};
