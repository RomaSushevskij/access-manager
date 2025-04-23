export enum AppRoutes {
  SIGN_IN = "sign_in",
  MAIN = "main",
  LOGS = "logs",
  NOT_FOUND = "not_found",
}

type TRoutePath = Record<AppRoutes, string> & {
  getPath: <T extends Record<string, string | number>>(
    route: AppRoutes,
    params?: T | undefined,
  ) => string;
};

export const RoutePath: TRoutePath = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.LOGS]: "/logs",
  [AppRoutes.SIGN_IN]: "/sign-in",
  [AppRoutes.NOT_FOUND]: "*",

  getPath: (route, params) => {
    return RoutePath[route].replace(/:([a-zA-Z]+)/g, (_, key) => String(params ? params[key] : ""));
  },
};
