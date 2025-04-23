import { lazy } from "react";

export const UsersPageAsync = lazy(() =>
  import("./users-page").then(({ UsersPage }) => ({ default: UsersPage })),
);
