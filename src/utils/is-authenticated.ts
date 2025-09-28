import { getAuthToken } from "./auth-token";
import { getRefreshToken } from "./refresh-token";

export const isAuthenticated = () => {
  return !!getAuthToken() && !!getRefreshToken();
};
