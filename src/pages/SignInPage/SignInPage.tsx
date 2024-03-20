import { useAuth } from "../../hooks/useAuth";

import {
  Button,
  Decor,
  Input,
  Logo,
  NewCompany,
  Title,
} from "../../components";

import styles from "../SignUpPage/SignUpPage.module.css";

const SignInPage = () => {
  const { navigation } = useAuth();

  return (
    <section>
      <div className={styles.wrapper__logo}>
        <Logo />
      </div>
      <div className={styles.wrapper__title}>
        <Title>Log in to your account</Title>
      </div>
      <div className={styles.wrapper__decor}>
        <Decor />
      </div>
      <div className={styles.wrapper__email}>
        <Input placeholder="Work email" />
      </div>
      <div
        className={styles.wrapper__forgot}
        onClick={() => navigation("/password")}
      >
        <p className={styles.forgot}>Forgot your password?</p>
      </div>
      <div className={styles.wrapper__button}>
        <Button>Log in to Qencode</Button>
      </div>
      <div className={styles.wrapper__new}>
        <NewCompany
          nav="Sign up"
          title="Is your company new to Qencode?"
          onClick={() => navigation("/")}
        />
      </div>
    </section>
  );
};

export default SignInPage;
