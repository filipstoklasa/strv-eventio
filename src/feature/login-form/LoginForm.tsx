import { Input } from "src/components/input";
import styles from "./LoginForm.module.css";
import { useForm } from "react-hook-form";
import { Button } from "src/components/button";
import { Typography } from "src/components/typography/Typography";
import { PasswordInput } from "src/feature/password-input";
import { SignUpLink } from "../sign-up-link";

export const LoginForm = () => {
  const { register } = useForm({ defaultValues: { email: "", password: "" } });

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <Typography variant="h1" as="h1">
          Sign in to Eventio.
        </Typography>
        <Typography variant="body">Enter your details below.</Typography>
      </div>
      <form className={styles.form}>
        <Input label="Email" placeholder="Email" {...register("email")} />
        <PasswordInput
          label="Password"
          placeholder="Password"
          {...register("password")}
        />
        <SignUpLink className={styles.forgot} />
        <Button className={styles.signIn} type="submit">
          SIGN IN
        </Button>
      </form>
    </div>
  );
};
