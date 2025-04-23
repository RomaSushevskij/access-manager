import { lazy } from "react";

export const LogsPageAsync = lazy(() =>
  import("./logs-page").then(({ LogsPage }) => ({ default: LogsPage })),
);
