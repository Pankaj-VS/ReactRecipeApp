import styles from "./container.module.css";

export default function Contianer({ children }) {
  return <div className={styles.parentContainer}>{children}</div>;
}
