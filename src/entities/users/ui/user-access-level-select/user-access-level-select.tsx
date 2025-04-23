import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";

import { TOption } from "@/shared/types/option";

import { TUser } from "../../model/types";

const accessLevelOptions: TOption<TUser["accessLevel"]>[] = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
];

export const UserAccessLevelSelect = ({
  value,
  onChange,
  userId,
}: {
  value: TUser["accessLevel"];
  userId: TUser["id"];
  onChange: (role: TUser["accessLevel"]) => void;
}) => {
  const [open, setOpen] = useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as TUser["accessLevel"]);
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
        {"Уровень доступа "}
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
        {accessLevelOptions.map(({ value, label }) => {
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
