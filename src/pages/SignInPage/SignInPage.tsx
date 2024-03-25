import { ChangeEvent, useState } from "react";

import { login } from "../../redux/auth/authOperations";
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

import styles from "../SignInPage/SigInPage.module.css";

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorEmail, setErrorEmail] = useState<string>("");
  const [errorPassword, setErrorPassword] = useState<string>("");
  const [active, setActive] = useState<boolean>(false);

  const { navigation, dispatch } = useAuth();

  const toggle = () => setShowPassword((prevState) => !prevState);

  const toggleBlur = () => {
    if (email && !errorEmail) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

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

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await dispatch(login({ email, password }));
    } catch (error) {
      console.error(error);
    }
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
      <form onSubmit={handleFormSubmit} autoComplete="off">
        <div className={styles.wrapper__email}>
          {errorEmail && (
            <ErrorMessage position="up">{errorEmail}</ErrorMessage>
          )}
          <Input
            placeholder="Work email"
            value={email}
            onChange={handleEmailChange}
            onBlur={toggleBlur}
          />
        </div>

        {active && (
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
        )}
        {active && (
          <div
            className={styles.wrapper__forgot}
            onClick={() => navigation("/password")}
          >
            <p className={styles.forgot}>Forgot your password?</p>
          </div>
        )}

        <div className={styles.wrapper__button}>
          <Button type="submit">Log in to Qencode</Button>
        </div>
      </form>
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
