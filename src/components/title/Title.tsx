import { ReactNode } from "react";

import styles from "./Title.module.css";

export interface TitleProps {
  children: ReactNode;
}

export const Title = ({ children }: TitleProps) => {
  return <h2 className={styles.title}>{children}</h2>;
};
