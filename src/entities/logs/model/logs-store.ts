import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

import { TLog } from "../model/types";

type TLogsState = {
  logs: TLog[];
};

type TLogsAction = {
  addLog: (args: Omit<TLog, "id" | "timestamp" | "formattedMessage">) => void;
};

export const useLogsStore = create<TLogsState & TLogsAction>((setState) => {
  return {
    logs: [],
    addLog: (logData) => {
      const timestamp = new Date().getTime();
      const newLog: TLog = {
        id: uuidv4(),
        timestamp,
        ...logData,
      };
      setState((state) => ({ logs: [newLog, ...state.logs] }));
    },
  };
});
