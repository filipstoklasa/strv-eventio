const AUTH_TOKEN = "authToken";

export const getAuthToken = () => {
  return localStorage.getItem(AUTH_TOKEN);
};

export const setAuthToken = (token: string) => {
  return localStorage.setItem(AUTH_TOKEN, token);
};
