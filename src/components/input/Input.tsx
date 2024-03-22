import { ChangeEvent, InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ value, onChange, ...props }: InputProps) => {
  return (
    <input
      className={styles.input}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};
