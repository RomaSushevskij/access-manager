import { lazy } from "react";

export const NotFoundPageAsync = lazy(() =>
  import("./not-found-page").then(({ NotFoundPage }) => ({ default: NotFoundPage })),
);
