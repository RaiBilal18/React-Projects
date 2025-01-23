import { useContext, useRef } from "react";
import { IoAddCircleSharp } from "react-icons/io5";
import { TodoContextStore } from "../store/Todoitemscontext";

function Addtodo() {
  let { AddNewItems } = useContext(TodoContextStore);
  let todonameElement = useRef();
  let duedateElement = useRef();
  let handleAddButton = (Event) => {
    Event.preventDefault();
    const NewName = todonameElement.current.value;
    const NewDate = duedateElement.current.value;
    if (NewName.trim() === "" || NewDate.trim() === "") {
      alert("Please fill in both the name and date fields!");
      return;
    }
    todonameElement.current.value = "";
    duedateElement.current.value = "";
    AddNewItems(NewName, NewDate);
  };
  return (
    <div className="container text-center">
      <form className="row" onSubmit={handleAddButton}>
        <div className="col-sm-4">
          <input
            type="text"
            placeholder="Enter Todo Here"
            ref={todonameElement}
          />
        </div>
        <div className="col-sm-4">
          <input type="date" ref={duedateElement} />
        </div>
        <div className="col-sm-2 d-flex justify-content-center">
          <button type="submit" className="btn btn-success kg-button">
            <IoAddCircleSharp />
          </button>
        </div>
      </form>
    </div>
  );
}
export default Addtodo;
