import { ChangeEvent, useState } from "react";

import { useAuth } from "../../hooks/useAuth";
import { emailValidate, passwordValidate } from "../../schema";

import {
  Button,
  Decor,
  ErrorMessage,
  Icon,
  Input,
  Logo,
  NewCompany,
  Title,
} from "../../components";

import styles from "./SignUpPage.module.css";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorEmail, setErrorEmail] = useState<string>("");
  const [errorPassword, setErrorPassword] = useState<string>("");

  const { navigation } = useAuth();

  const toggle = () => setShowPassword((prevState) => !prevState);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail(value);
    setErrorEmail(emailValidate(value));
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassword(value);
    setErrorPassword(passwordValidate(value));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(
      "email",
      email.toLowerCase(),
      "password:",
      password.toLowerCase()
    );
  };

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
      <form onSubmit={handleFormSubmit}>
        <div className={styles.wrapper__email}>
          {errorEmail && (
            <ErrorMessage position="up">{errorEmail}</ErrorMessage>
          )}
          <Input
            placeholder="Work email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className={styles.wrapper__password}>
          {errorPassword && (
            <ErrorMessage position="down">{errorPassword}</ErrorMessage>
          )}
          <Input
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handlePasswordChange}
          />
          {showPassword ? (
            <Icon idIcon="hide" onClick={toggle} />
          ) : (
            <Icon idIcon="show" onClick={toggle} />
          )}
        </div>
        <div className={styles.wrapper__button}>
          <Button type="submit">Register in to Qencode</Button>
        </div>
      </form>
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
