import { formatDate } from "@/shared/lib/format-date";

import { TLog } from "../model/types";

export const formatLog = (log: Omit<TLog, "id">) => {
  const { action, oldValue, newValue, initiatorUserName, targetUserName, timestamp } = log;

  switch (action) {
    case "editUserRole": {
      return `${initiatorUserName} изменил роль пользователя ${targetUserName} с "${oldValue}" на "${newValue}" в ${formatDate(new Date(timestamp))}`;
    }
    case "editUserAccessLevel": {
      return `${initiatorUserName} изменил уровень доступа пользователя ${targetUserName} с "${oldValue}" на "${newValue}" в ${formatDate(new Date(timestamp))}`;
    }
    case "deleteUser": {
      return `${initiatorUserName} удалил пользователя ${targetUserName} в ${formatDate(new Date(timestamp))}`;
    }
    default: {
      return `${initiatorUserName} удалил пользователя ${targetUserName} в ${formatDate(new Date(timestamp))}`;
    }
  }
};
