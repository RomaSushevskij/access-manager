// components/ErrorFallback.tsx
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import RefreshIcon from "@mui/icons-material/Refresh";

export const ErrorPage = () => {
  const handleReloadBtnClick = () => {
    window.location.reload();
  };
  return (
    <Container
      maxWidth="sm"
      sx={{
        mt: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <ErrorOutlineIcon color="error" sx={{ fontSize: 80, mb: 2 }} />
      <Typography variant="h4" gutterBottom>
        Что-то пошло не так
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        {"Произошла непредвиденная ошибка"}
      </Typography>
      <Box>
        <Button variant="contained" startIcon={<RefreshIcon />} onClick={handleReloadBtnClick}>
          {"Обновить страницу"}
        </Button>
      </Box>
    </Container>
  );
};
