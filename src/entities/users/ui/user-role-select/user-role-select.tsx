import { useState } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";

import { TOption } from "@/shared/types/option";

import { UserRolesMapper } from "../../lib/user-roles-mapper";
import { TUser } from "../../model/types";

const rolesOptions: TOption<TUser["role"]>[] = [
  { value: "admin", label: UserRolesMapper.admin },
  { value: "operator", label: UserRolesMapper.operator },
  { value: "analyst", label: UserRolesMapper.analyst },
];

export const UserRoleSelect = ({
  value,
  onChange,
  userId,
}: {
  value: TUser["role"];
  userId: TUser["id"];
  onChange: (role: TUser["role"]) => void;
}) => {
  const [open, setOpen] = useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as TUser["role"]);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack flexDirection={"column"} rowGap={0.5}>
      <InputLabel
        onClick={handleOpen}
        sx={{ fontSize: 14 }}
        id={`user-role-select-label-${userId}`}
      >
        {"Роль"}
      </InputLabel>

      <Select
        size={"small"}
        value={value}
        onChange={handleChange}
        open={open}
        onOpen={handleOpen}
        onClose={handleClose}
        labelId={`user-role-select-label-${userId}`}
        id={`user-role-select-${userId}`}
      >
        {rolesOptions.map(({ value, label }) => {
          return (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          );
        })}
      </Select>
    </Stack>
  );
};
