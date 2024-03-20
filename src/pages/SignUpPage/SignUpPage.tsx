import { useAuth } from "../../hooks/useAuth";

import {
  Button,
  Decor,
  Input,
  Logo,
  NewCompany,
  Title,
} from "../../components";

import styles from "./SignUpPage.module.css";

const SignUpPage = () => {
  const { navigation } = useAuth();

  return (
    <section>
      <div className={styles.wrapper__logo}>
        <Logo />
      </div>
      <div className={styles.wrapper__title}>
        <Title>Register your account</Title>
      </div>
      <div className={styles.wrapper__decor}>
        <Decor />
      </div>
      <div className={styles.wrapper__email}>
        <Input placeholder="Work email" />
      </div>
      <div className={styles.wrapper__password}>
        <Input placeholder="Password" />
      </div>
      <div className={styles.wrapper__button}>
        <Button>Register in to Qencode</Button>
      </div>
      <div className={styles.wrapper__new}>
        <NewCompany
          nav="Sign in"
          title="Already registered?"
          onClick={() => navigation("/signin")}
        />
      </div>
    </section>
  );
};

export default SignUpPage;
