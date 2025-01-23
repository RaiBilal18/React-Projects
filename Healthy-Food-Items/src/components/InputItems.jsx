import styles from "./InputItems.module.css";
let InputItems = ({ onKeyDown }) => {
  return <input type="text" className={styles.Input} onKeyDown={onKeyDown} />;
};
export default InputItems;
