import { type RouteProps } from "react-router";

import { AppRoutes, RoutePath } from "@/shared/config/routeConfig";
import { UsersPage } from "@/pages/users-page";
import { LogsPage } from "@/pages/logs-page";
import { NotFoundPage } from "@/pages/not-found-page";

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <UsersPage />,
  },
  [AppRoutes.LOGS]: {
    path: RoutePath.logs,
    element: <LogsPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
