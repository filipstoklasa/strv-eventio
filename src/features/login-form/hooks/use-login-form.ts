import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSignIn } from "src/api/sign-in/use-sign-in";
import { useUserContext } from "src/context/user-context";
import { useNavigate } from "@tanstack/react-router";

const validation = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

interface LoginFormValues {
  email: string;
  password: string;
}

export const useLoginForm = () => {
  const navigate = useNavigate();
  const { setUser } = useUserContext();
  const { mutateAsync: signIn } = useSignIn();

  const form = useForm<LoginFormValues>({
    defaultValues: { email: "", password: "" },
    resolver: yupResolver(validation),
  });

  const onSubmit = form.handleSubmit(async (data: LoginFormValues) => {
    await signIn(data, {
      onSuccess: (user) => {
        setUser(user);
        navigate({ to: "/", viewTransition: true, replace: true });
      },
      onError: () => {
        form.setError("root", {
          message: "Oops! That email and password combination is not valid.",
        });
      },
    });
  });

  return { onSubmit, form };
};
