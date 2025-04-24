import { logActionMapper } from "../lib/log-action-mapper.ts";

type TLogAction = keyof typeof logActionMapper;

export type TLog = {
  id: string;
  timestamp: number;
  action: TLogAction;
  initiatorUserName: string;
  targetUserName: string;
  oldValue?: unknown;
  newValue?: unknown;
};
