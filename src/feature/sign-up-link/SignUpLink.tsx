import { Typography } from "src/components/typography";
import styles from "./SignUpLink.module.css";
import clsx from "clsx";

interface SignUpLinkProps {
  className?: string;
}

export const SignUpLink = ({ className }: SignUpLinkProps) => (
  <Typography variant="caption" className={clsx(styles.forgot, className)}>
    Don’t have account? <b>SIGN UP</b>
  </Typography>
);
