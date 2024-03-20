import { useAuth } from "../../hooks/useAuth";
import { Button, Input, Logo, Title } from "../../components";

import styles from "../SignUpPage/SignUpPage.module.css";

const CreatePasswordPage = () => {
  const { navigation } = useAuth();

  return (
    <section>
      <div className={styles.wrapper__logo}>
        <Logo />
      </div>
      <div className={styles.wrapper__title}>
        <Title>Create new Password?</Title>
      </div>
      <div className={styles.wrapper__password}>
        <p className={styles.password}>Password</p>
        <Input placeholder="Password" />
      </div>
      <div className={styles.wrapper__password}>
        <p className={styles.password}>Confirm Password</p>
        <Input placeholder="Password" />
      </div>
      <div className={styles.wrapper__button}>
        <Button onClick={() => navigation("signin")}>Reset Password</Button>
      </div>
    </section>
  );
};

export default CreatePasswordPage;
