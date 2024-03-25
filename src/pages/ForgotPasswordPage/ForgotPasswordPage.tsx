import { useState, ChangeEvent } from "react";

import { useAuth } from "../../hooks/useAuth";
import { emailValidate } from "../../schema";

import { Button, ErrorMessage, Input, Logo, Title } from "../../components";

import styles from "../SignInPage/SigInPage.module.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>("");
  const [errorEmail, setErrorEmail] = useState<string>("");

  const { navigation } = useAuth();

  console.log(email);

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
        <Title>Forgot Password?</Title>
      </div>
      <div className={styles.wrapper__email}>
        {errorEmail && <ErrorMessage position="up">{errorEmail}</ErrorMessage>}
        <Input
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
        />
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
