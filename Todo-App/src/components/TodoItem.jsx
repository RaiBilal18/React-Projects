import { useContext } from "react";
import styles from "./TodoItem.module.css";
import { MdDelete } from "react-icons/md";
import { TodoContextStore } from "../store/Todoitemscontext";
let TodoItem = ({ todoname, tododate }) => {
  let { DeleteItems } = useContext(TodoContextStore);
  return (
    <div className="container text-center">
      <div className={`${styles["kg-row"]} row `}>
        <div className="col-sm-4">{todoname}</div>
        <div className="col-sm-4">{tododate}</div>
        <div className="col-sm-2 d-flex justify-content-center">
          <button
            type="button"
            className={`btn btn-danger ${styles["kg-button"]}`}
            onClick={() => {
              DeleteItems(todoname);
            }}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};
export default TodoItem;
