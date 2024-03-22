import { ButtonHTMLAttributes, MouseEvent, ReactNode } from "react";

import styles from "./Button.module.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  variant?: "primary" | "transparent";
}

export const Button = ({
  children,
  onClick,
  variant = "primary",
  ...props
}: ButtonProps) => {
  return (
    <button
      type="submit"
      className={variant === "primary" ? styles.button : styles.transparent}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
