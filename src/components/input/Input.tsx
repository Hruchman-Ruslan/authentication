import styles from "./Input.module.css";

export interface InputProps {
  placeholder: string;
  type?: string;
}

export const Input = ({ placeholder, type = "text" }: InputProps) => {
  return (
    <input type={type} placeholder={placeholder} className={styles.input} />
  );
};
