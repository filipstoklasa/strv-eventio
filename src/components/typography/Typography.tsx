import type { ElementType, ReactNode, ComponentPropsWithoutRef } from "react";
import styles from "./Typography.module.css";
import clsx from "clsx";

type TypographyVariant = "h1" | "body" | "caption";

type TypographyProps<T extends ElementType> = {
  as?: T;
  variant?: TypographyVariant;
  className?: string;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

export const Typography = <T extends ElementType = "p">({
  as,
  variant = "body",
  className,
  children,
  ...props
}: TypographyProps<T>) => {
  const Component = as || "p";

  return (
    <Component className={clsx(styles[variant], className)} {...props}>
      {children}
    </Component>
  );
};
