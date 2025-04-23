import { LocalStorageManager } from "@/shared/lib/localStorageManager.ts";
import { TUser } from "@/entities/users";

const AUTH_STORAGE_KEY = "access_manager_auth";

export const authStorageManager = new LocalStorageManager<TUser | null>(AUTH_STORAGE_KEY);
