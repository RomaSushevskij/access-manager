import { lazy } from "react";

export const SignInPageAsync = lazy(() =>
  import("./sign-in-page").then(({ SignInPage }) => ({ default: SignInPage })),
);
