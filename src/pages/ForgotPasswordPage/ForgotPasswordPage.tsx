import { useAuth } from "../../hooks/useAuth";
import { Button, Input, Logo, Title } from "../../components";

import styles from "../SignUpPage/SignUpPage.module.css";

const ForgotPassword = () => {
  const { navigation } = useAuth();

  return (
    <section>
      <div className={styles.wrapper__logo}>
        <Logo />
      </div>
      <div className={styles.wrapper__title}>
        <Title>Forgot Password?</Title>
      </div>
      <div className={styles.wrapper__email}>
        <Input placeholder="Enter your email" />
      </div>
      <div className={styles.wrapper__button}>
        <Button onClick={() => navigation("/create-password")}>Send</Button>
      </div>
      <div className={styles.wrapper__button}>
        <Button variant="transparent" onClick={() => navigation("/signin")}>
          Cancel
        </Button>
      </div>
    </section>
  );
};

export default ForgotPassword;
