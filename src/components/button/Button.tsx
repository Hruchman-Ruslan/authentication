import { ReactNode } from "react";

import styles from "./Button.module.css";

export interface ButtonProps {
  children: ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button type="submit" className={styles.button}>
      {children}
    </button>
  );
};
