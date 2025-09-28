import { getAuthToken } from "./auth-token";
import { getRefreshToken } from "./get-refresh-token";

export const isAuthenticated = () => {
  return !!getAuthToken() && !!getRefreshToken();
};
