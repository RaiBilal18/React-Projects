import styles from "./Individualbtn.module.css";
let Individualbtn = ({ BtnName, handleClick }) => {
  return (
    <button
      type="button"
      className={`${styles["button_setting"]} btn btn-dark`}
      onClick={handleClick}
    >
      {BtnName}
    </button>
  );
};
export default Individualbtn;
