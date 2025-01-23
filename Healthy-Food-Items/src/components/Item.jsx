import { useState } from "react";
import styles from "./Item.module.css";

let Item = ({ item, bought, HandleBuybutton }) => {
  return (
    <li className={`${styles["Tcolor"]} list-group-item ${bought && "active"}`}>
      <span>{item}</span>
      <button
        className={`${styles.button} btn btn-outline-info`}
        onClick={HandleBuybutton}
      >
        Buy
      </button>
    </li>
  );
};
export default Item;
