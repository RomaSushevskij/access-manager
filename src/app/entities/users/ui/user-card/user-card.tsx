import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";

import { TUser } from "../../model/types.ts";

export const UserCard = ({
  user,
  // editAccessLevelSlot,
  // editRoleSlot,
  // deleteUserSlot,
}: {
  user: TUser;
  // editRoleSlot: ReactElement;
  // editAccessLevelSlot: ReactElement;
  // deleteUserSlot: ReactElement;
}) => {
  const { name, email } = user;

  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h1">
          {name}
        </Typography>

        <Typography variant="body2">{email}</Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};
