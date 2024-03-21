import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Button, Icon, Input, Logo, Title } from "../../components";

import styles from "../SignUpPage/SignUpPage.module.css";

const CreatePasswordPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const { navigation } = useAuth();

  const toggle = () => setShowPassword((prevState) => !prevState);
  const toggleConfirm = () => setShowConfirm((prevState) => !prevState);

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
      </div>
      <div className={styles.wrapper__password}>
        <p className={styles.password}>Confirm Password</p>
        <div className={styles.box}>
          <Input
            placeholder="Password"
            type={showConfirm ? "text" : "password"}
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
