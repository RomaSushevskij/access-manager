import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";

import { routeConfig } from "../config/routeConfig";
import { RequireAuth } from "../ui/require-auth";
import { RequireNotAuth } from "../ui/require-not-auth";

export const AppRouter = () => {
  const renderFallback = (
    <Stack justifyContent={"center"} alignItems={"center"} minHeight={"50dvh"}>
      <CircularProgress />
    </Stack>
  );

  return (
    <Suspense fallback={renderFallback}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element, authOnly, notAuthOnly }) => {
          const renderElement = () => {
            if (authOnly) {
              return (
                <RequireAuth>
                  <>{element}</>
                </RequireAuth>
              );
            }

            if (notAuthOnly) {
              return (
                <RequireNotAuth>
                  <>{element}</>
                </RequireNotAuth>
              );
            }

            return <>{element}</>;
          };

          return <Route key={path} path={path} element={renderElement()} />;
        })}
      </Routes>
    </Suspense>
  );
};
