import { useMutation } from "@tanstack/react-query";
import { signIn, type SignInRequest, type SignInResponse } from "./sign-in";

export const useSignIn = () => {
  return useMutation<SignInResponse, Error, SignInRequest>({
    mutationFn: signIn,
  });
};
