import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "@toolpad/core/AppProvider";
import { createTheme } from "@mui/material";

import App from "./App";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AppProvider theme={createTheme({ colorSchemes: { light: true } })}>
        <App />
      </AppProvider>
    </BrowserRouter>
  </StrictMode>,
);
