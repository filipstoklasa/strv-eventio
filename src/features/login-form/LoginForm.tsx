import { Input } from "src/components/input";
import styles from "./LoginForm.module.css";
import { useForm } from "react-hook-form";
import { Button } from "src/components/button";
import { Typography } from "src/components/typography/Typography";
import { PasswordInput } from "src/features/password-input";
import { SignUpLink } from "../sign-up-link";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { authenticate } from "src/utils/auth";
import { useNavigate } from "@tanstack/react-router";

const validation = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

interface LoginFormValues {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    defaultValues: { email: "", password: "" },
    resolver: yupResolver(validation),
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      await authenticate(data.email, data.password);
      navigate({ to: "/", viewTransition: true });
    } catch {
      setError("root", {
        message: "Oops! That email and password combination is not valid.",
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <Typography variant="h1" as="h1">
          Sign in to Eventio.
        </Typography>
        {errors.root ? (
          <Typography variant="error">{errors.root.message}</Typography>
        ) : (
          <Typography variant="body">Enter your details below.</Typography>
        )}
      </div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Email"
          placeholder="Email"
          type="email"
          autoComplete="email"
          error={!!errors.email || !!errors.root}
          errorMessage={errors.email?.message}
          {...register("email")}
        />
        <PasswordInput
          label="Password"
          placeholder="Password"
          error={!!errors.password || !!errors.root}
          errorMessage={errors.password?.message}
          {...register("password")}
        />
        <SignUpLink className={styles.forgot} />
        <Button
          className={styles.signIn}
          type="submit"
          loading={isSubmitting}
          disabled={isSubmitting}
        >
          SIGN IN
        </Button>
      </form>
    </div>
  );
};
