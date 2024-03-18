import { Decor, Logo, Title } from "../../components";
import styles from "./SignUpPage.module.css";

const SignUpPage = () => {
  return (
    <>
      <div className={styles.wrapper__logo}>
        <Logo />
      </div>
      <div className={styles.wrapper__title}>
        <Title>Log in to your account</Title>
      </div>
      <div className={styles.wrapper__decor}>
        <Decor />
      </div>
    </>
  );
};

export default SignUpPage;
