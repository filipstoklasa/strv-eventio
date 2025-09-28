const REFRESH_TOKEN = "refreshToken";

export const getRefreshToken = () => {
  return localStorage.getItem(REFRESH_TOKEN);
};

export const setRefreshToken = (token: string) => {
  return localStorage.setItem(REFRESH_TOKEN, token);
};
