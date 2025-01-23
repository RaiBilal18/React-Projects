import styles from "./Container.module.css";
let Container = ({ children }) => {
  return <div className={styles.Container}>{children}</div>;
};
export default Container;
