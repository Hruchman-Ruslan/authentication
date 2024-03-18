import styles from "./Decor.module.css";

export const Decor = () => {
  return (
    <ul className={styles.list}>
      <li>
        <span className={styles.decor} />
      </li>
      <li>
        <span className={styles.choose}>or</span>
      </li>
      <li>
        <span className={styles.decor} />
      </li>
    </ul>
  );
};
