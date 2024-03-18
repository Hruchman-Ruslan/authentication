import logo from "/logo.svg";
import styles from "./Logo.module.css";

export interface LogoProps {}

export const Logo = () => {
  return <img src={logo} alt="logo" className={styles.logo} />;
};
