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
      <div className={styles.wrapper__password}>
        <Input placeholder="Password" />
      </div>
      <div className={styles.wrapper__forgot}>
        <p className={styles.forgot}>Forgot your password?</p>
      </div>
      <div className={styles.wrapper__button}>
        <Button>Log in to Qencode</Button>
      </div>
      <div className={styles.wrapper__new}>
        <NewCompany />
      </div>
    </section>
  );
};

export default SignUpPage;
