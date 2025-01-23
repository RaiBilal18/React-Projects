import TodoName from "./components/TodoName";
import Addtodo from "./components/Addtodo";
import TodoItems from "./components/TodoItems";
import EmptyMessage from "./components/EmptyMessage";
import TodoItemsContextProvider from "./store/Todoitemscontext";
function App() {
  return (
    <TodoItemsContextProvider>
      <center className="MainCOntainer">
        <TodoName></TodoName>
        <Addtodo></Addtodo>
        <EmptyMessage></EmptyMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
