import apiClient from "src/api/client";
import type { paths } from "codegen/eventio";
import { AxiosError } from "axios";

export type PostCreateEventResponse =
  paths["/events"]["post"]["responses"]["200"]["content"]["application/json"];

export type PostCreateEventRequest =
  paths["/events"]["post"]["requestBody"]["content"]["application/json"];

export const postCreateEvent = async (payload: PostCreateEventRequest) => {
  try {
    const response = await apiClient.post<PostCreateEventResponse>(
      `/events`,
      payload
    );

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError && error?.response?.data) {
      throw error.response.data;
    }
  }
};
