import { useState } from "react";

import { useAuth } from "../../hooks/useAuth";

import {
  Button,
  Decor,
  Icon,
  Input,
  Logo,
  NewCompany,
  Title,
} from "../../components";

import styles from "./SignUpPage.module.css";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { navigation } = useAuth();

  const toggle = () => setShowPassword((prevState) => !prevState);

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
        <Input
          placeholder="Password"
          type={showPassword ? "text" : "password"}
        />
        {showPassword ? (
          <Icon idIcon="hide" onClick={toggle} />
        ) : (
          <Icon idIcon="show" onClick={toggle} />
        )}
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
