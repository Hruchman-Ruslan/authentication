import { MouseEvent } from "react";

import styles from "./NewCompany.module.css";

export interface NewCompanyProps {
  nav: string;
  title: string;
  onClick?: (e: MouseEvent<HTMLSpanElement>) => void;
}

export const NewCompany = ({ nav, title, onClick }: NewCompanyProps) => {
  return (
    <>
      <p className={styles.title}>{title}</p>
      <span className={styles.link} onClick={onClick}>
        {nav}
      </span>
    </>
  );
};
