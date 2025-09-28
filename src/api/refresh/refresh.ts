import type { paths } from "codegen/eventio";
import apiClient from "src/api/client";

export type RefreshResponse =
  paths["/auth/sign-in"]["post"]["responses"]["200"]["content"]["application/json"];

export type RefreshRequest =
  paths["/auth/refresh"]["post"]["requestBody"]["content"]["application/json"];

export const refresh = async (payload: RefreshRequest) => {
  const response = await apiClient.post<RefreshResponse>(
    "/auth/refresh",
    payload
  );

  if (response.headers["access-token"]) {
    localStorage.setItem("authToken", response.headers["access-token"]);
  }

  return response.data;
};
