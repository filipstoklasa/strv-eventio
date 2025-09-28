import type { paths } from "codegen/eventio";
import apiClient from "src/api/client";
import { setAuthToken } from "src/utils/auth-token";
import { setRefreshToken } from "src/utils/refresh-token";

export type SignInResponse =
  paths["/auth/sign-in"]["post"]["responses"]["200"]["content"]["application/json"];

export type SignInRequest =
  paths["/auth/sign-in"]["post"]["requestBody"]["content"]["application/json"];

export const signIn = async (payload: SignInRequest) => {
  const response = await apiClient.post<SignInResponse>(
    "/auth/sign-in",
    payload
  );

  if (!response.headers["access-token"] || !response.headers["refresh-token"]) {
    throw Error("Something went wrong while signing in.");
  }

  setAuthToken(response.headers["access-token"]);
  setRefreshToken(response.headers["refresh-token"]);

  return response.data;
};
