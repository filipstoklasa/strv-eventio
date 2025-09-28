import { Input } from "src/components/input";
import { Button } from "src/components/button";
import { Typography } from "src/components/typography/Typography";
import { PasswordInput } from "src/features/password-input";
import { SignUpLink } from "src/features/sign-up-link";
import { useLoginForm } from "./hooks/use-login-form";
import styles from "./LoginForm.module.css";

export const LoginForm = () => {
  const {
    form: {
      formState: { errors, isSubmitting },
      register,
    },
    onSubmit,
  } = useLoginForm();

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <Typography sm="xl" lg="3xl" as="h1">
          Sign in to Eventio.
        </Typography>
        {errors.root ? (
          <Typography variant="error">{errors.root.message}</Typography>
        ) : (
          <Typography sm="sm" lg="lg" variant="secondary">
            Enter your details below.
          </Typography>
        )}
      </div>
      <form className={styles.form} onSubmit={onSubmit}>
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
