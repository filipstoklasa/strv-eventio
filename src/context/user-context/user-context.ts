import { createContext, useContext } from "react";
import type { operations } from "codegen/eventio";

export type User =
  operations["eventio-auth-signIn"]["responses"]["200"]["content"]["application/json"];

export interface UserContext {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const userContext = createContext<UserContext | null>(null);

export const useUserContext = () => {
  const context = useContext(userContext);

  if (!context) {
    throw Error("Missing user context");
  }

  return context;
};
