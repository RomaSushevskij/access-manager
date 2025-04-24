import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "@toolpad/core/AppProvider";
import { createTheme } from "@mui/material";

import App from "./App";
import "./styles/index.css";
import { ErrorBoundary } from "./providers/error-boundary";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <AppProvider theme={createTheme({ colorSchemes: { light: true } })}>
          <App />
        </AppProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>,
);
