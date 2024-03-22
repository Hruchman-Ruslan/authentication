import { ChangeEvent, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import {
  Button,
  ErrorMessage,
  Icon,
  Input,
  Logo,
  Title,
} from "../../components";

import styles from "../SignUpPage/SignUpPage.module.css";
import { passwordValidate } from "../../schema";

const CreatePasswordPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [password, setPassword] = useState<string>("");
  const [confirm, setConfirm] = useState<string>("");

  const [errorPassword, setErrorPassword] = useState<string>("");
  const [errorConfirm, setErrorConfirm] = useState<string>("");

  console.log(password);
  console.log(confirm);

  const { navigation } = useAuth();

  const toggle = () => setShowPassword((prevState) => !prevState);
  const toggleConfirm = () => setShowConfirm((prevState) => !prevState);

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassword(value);
    setErrorPassword(passwordValidate(value));
  };

  const handleConfirmChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setConfirm(value);
    setErrorConfirm(passwordValidate(value));
  };

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
        <div className={styles.box}>
          {errorPassword && (
            <ErrorMessage position="up">{errorPassword}</ErrorMessage>
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
      </div>
      <div className={styles.wrapper__password}>
        <p className={styles.password}>Confirm Password</p>
        <div className={styles.box}>
          {errorConfirm && (
            <ErrorMessage position="down">{errorConfirm}</ErrorMessage>
          )}
          <Input
            placeholder="Password"
            type={showConfirm ? "text" : "password"}
            value={confirm}
            onChange={handleConfirmChange}
          />
          {showConfirm ? (
            <Icon idIcon="hide" onClick={toggleConfirm} />
          ) : (
            <Icon idIcon="show" onClick={toggleConfirm} />
          )}
        </div>
      </div>
      <div className={styles.wrapper__button}>
        <Button onClick={() => navigation("signin")}>Reset Password</Button>
      </div>
    </section>
  );
};

export default CreatePasswordPage;
