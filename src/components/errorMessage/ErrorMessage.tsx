import { ReactNode } from "react";

import styles from "./ErrorMessage.module.css";

export interface ErrorMessageProps {
  children: ReactNode;
  position: "up" | "down";
}

export const ErrorMessage = ({ children, position }: ErrorMessageProps) => (
  <span
    className={position === "up" ? styles.message__up : styles.message__down}
  >
    {children}
  </span>
);
