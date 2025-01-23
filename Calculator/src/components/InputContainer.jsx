import styles from "./InputContainer.module.css";

let InputContainer = ({ DisplayCalVal }) => {
  return (
    <input
      type="text"
      className={styles.inputbox}
      value={DisplayCalVal}
      readOnly
    />
  );
};

export default InputContainer;
