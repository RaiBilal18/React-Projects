import TodoItem from "./TodoItem";
import { TodoContextStore } from "../store/Todoitemscontext";
import { useContext } from "react";
let TodoItems = () => {
  let { todoitems } = useContext(TodoContextStore);
  return (
    <>
      {todoitems.map((item, index) => {
        return (
          <TodoItem
            todoname={item.name}
            tododate={item.Date}
            key={index}
          ></TodoItem>
        );
      })}
    </>
  );
};
export default TodoItems;
