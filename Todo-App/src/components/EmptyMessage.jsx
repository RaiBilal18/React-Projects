import styles from "./EmptyMessage.module.css";
import { useContext } from "react";
import { TodoContextStore } from "../store/Todoitemscontext";

let EmptyMessage = () => {
  let { todoitems } = useContext(TodoContextStore);
  return (
    todoitems.length === 0 && (
      <p className={`${styles["paragraph"]}`}>There Is Nothing To Show</p>
    )
  );
};
export default EmptyMessage;
