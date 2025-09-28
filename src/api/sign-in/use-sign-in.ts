import { useMutation } from "@tanstack/react-query";
import {
  postSignIn,
  type SignInRequest,
  type SignInResponse,
} from "./post-sign-in";

export const useSignIn = () => {
  return useMutation<SignInResponse, Error, SignInRequest>({
    mutationFn: postSignIn,
  });
};
