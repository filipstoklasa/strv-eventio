import { Typography } from "src/components/typography";
import clsx from "clsx";

interface SignUpLinkProps {
  className?: string;
}

export const SignUpLink = ({ className }: SignUpLinkProps) => (
  <Typography sm="sm" variant="secondary" className={clsx(className)}>
    Don’t have account? <b>SIGN UP</b>
  </Typography>
);
