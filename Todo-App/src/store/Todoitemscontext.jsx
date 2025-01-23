import { createContext } from "react";
import { useReducer } from "react";

export const TodoContextStore = createContext({
  todoitems: [],
  DeleteItems: () => {},
  AddNewItems: () => {},
});

const reducerfunc = (currstate, Action) => {
  let NewTodoItems = currstate;
  if (Action.type === "ADD_ITEM") {
    NewTodoItems = [
      ...currstate,
      { name: Action.payload.getname, Date: Action.payload.getdate },
    ];
  } else if (Action.type === "DELETE_ITEM") {
    NewTodoItems = currstate.filter(
      (item) => item.name !== Action.payload.gettodoname
    );
  }
  return NewTodoItems;
};

let TodoItemsContextProvider = ({ children }) => {
  let [todoitems, Dispatch] = useReducer(reducerfunc, []);
  const AddNewItems = (getname, getdate) => {
    let AddItemsAction = {
      type: "ADD_ITEM",
      payload: {
        getname,
        getdate,
      },
    };
    Dispatch(AddItemsAction);
  };

  const DeleteItems = (gettodoname) => {
    let DeleteItemsAction = {
      type: "DELETE_ITEM",
      payload: {
        gettodoname,
      },
    };
    Dispatch(DeleteItemsAction);
  };
  return (
    <TodoContextStore.Provider
      value={{
        todoitems,
        DeleteItems,
        AddNewItems,
      }}
    >
      {children}{" "}
    </TodoContextStore.Provider>
  );
};
export default TodoItemsContextProvider;
