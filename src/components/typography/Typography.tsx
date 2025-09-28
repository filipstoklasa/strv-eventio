import type { ElementType, ReactNode, ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import styles from "./Typography.module.css";

type Size = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
type Variant = "main" | "secondary" | "error";
type Weight = "light" | "regular" | "bold";

type TypographyProps<T extends ElementType> = {
  children: ReactNode;
  as?: T;
  variant?: Variant;
  sm?: Size;
  lg?: Size;
  weight?: Weight;
  className?: string;
} & ComponentPropsWithoutRef<T>;

export const Typography = <T extends ElementType = "p">({
  as,
  variant = "main",
  sm = "md",
  lg,
  weight = "light",
  className,
  children,
  ...props
}: TypographyProps<T>) => {
  const Component = as || "p";

  return (
    <Component
      className={clsx(
        styles.base,
        styles[`sm-${sm}`],
        lg && styles[`lg-${lg}`],
        styles[variant],
        styles[weight],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
