import styles from "./ButtonContainer.module.css";
import Individualbtn from "./Individualbtn";
let ButtonContainer = ({ handleClick }) => {
  const buttonsName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div id="button_container" className={`${styles["button_container"]}`}>
      {buttonsName.map((Name) => {
        return (
          <Individualbtn
            BtnName={Name}
            key={Name}
            handleClick={handleClick}
          ></Individualbtn>
        );
      })}
    </div>
  );
};
export default ButtonContainer;
