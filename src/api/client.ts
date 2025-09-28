import axios from "axios";
import { getAuthToken } from "src/utils/auth-token";
import { logout } from "src/utils/logout";

const API_URL =
  "https://eventio-testproject-jbseqgaw3-strvcom.vercel.app/api/rest/v1";

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    apiKey: import.meta.env.VITE_API_KEY,
  },
});

// Note - Define which endpoints need auth
const AUTH_REQUIRED_ENDPOINTS = ["/events"];

apiClient.interceptors.request.use((config) => {
  const token = getAuthToken();

  if (
    token &&
    config.url &&
    AUTH_REQUIRED_ENDPOINTS.some((endpoint) => config.url?.startsWith(endpoint))
  ) {
    // Note - Append auth token to protected endpoint request
    config.headers.set("Authorization", `Bearer ${token}`);
  }

  return config;
});

apiClient.interceptors.response.use((config) => {
  // Note - Logout user if the response is 401
  if (config.status === 401) {
    logout();
  }

  return config;
});

export default apiClient;
