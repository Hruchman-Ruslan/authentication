import { ChangeEvent, useState } from "react";

import { useAuth } from "../../hooks/useAuth";
import { emailValidate } from "../../schema";

import {
  Button,
  Decor,
  ErrorMessage,
  Input,
  Logo,
  NewCompany,
  Title,
} from "../../components";

import styles from "../SignUpPage/SignUpPage.module.css";

const SignInPage = () => {
  const [email, setEmail] = useState<string>("");
  const [errorEmail, setErrorEmail] = useState<string>("");

  console.log(email);

  const { navigation } = useAuth();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail(value);
    setErrorEmail(emailValidate(value));
  };

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
        {errorEmail && <ErrorMessage position="up">{errorEmail}</ErrorMessage>}
        <Input
          placeholder="Work email"
          value={email}
          onChange={handleEmailChange}
        />
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
