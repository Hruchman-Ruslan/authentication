import { MouseEvent } from "react";
import { useAuth } from "../../hooks/useAuth";

import logo from "/logo.svg";
import styles from "./Logo.module.css";

export interface LogoProps {
  onClick: (e: MouseEvent<HTMLImageElement>) => void;
}

export const Logo = () => {
  const { navigation } = useAuth();

  return (
    <img
      src={logo}
      alt="logo"
      className={styles.logo}
      onClick={() => navigation("/")}
    />
  );
};
