import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormEvent } from "react";

import { useInput } from "@/shared/lib/hooks/use-input";
import { useAuthStore } from "@/entities/auth";

export const SignInForm = () => {
  const { value: login, onChange: onLoginChange } = useInput();
  const { value: password, onChange: onPasswordChange } = useInput();

  const { signIn, error } = useAuthStore();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    signIn({ login, password });
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 400, mx: "auto", mt: 10 }}>
      <Typography variant="h5" sx={{ mb: 4 }}>
        Вход в систему
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 3 }}
      >
        <TextField size={"small"} label="Логин" value={login} onChange={onLoginChange} required />
        <TextField
          size={"small"}
          label="Пароль"
          type="password"
          value={password}
          onChange={onPasswordChange}
          required
        />

        {error && (
          <Typography variant={"body2"} color={"error"}>
            {error}
          </Typography>
        )}

        <Button type="submit" variant="contained">
          Войти
        </Button>
      </Box>
    </Paper>
  );
};
