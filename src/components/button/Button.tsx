import { MouseEvent, ReactNode } from "react";

import styles from "./Button.module.css";

export interface ButtonProps {
  children: ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  variant?: "primary" | "transparent";
}

export const Button = ({
  children,
  onClick,
  variant = "primary",
}: ButtonProps) => {
  return (
    <button
      type="submit"
      className={variant === "primary" ? styles.button : styles.transparent}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
