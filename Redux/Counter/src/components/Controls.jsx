import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counteractions } from "../store/counter";
import { privacyaction } from "../store/privacy";

const Controls = () => {
  let Dispatch = useDispatch();
  const Inputvalue = useRef();

  const handleIncrement = () => {
    Dispatch(counteractions.increment());
  };
  const handleDecrement = () => {
    Dispatch(counteractions.decrement());
  };

  const handleAddition = () => {
    Dispatch(counteractions.Addition(Inputvalue.current.value));
    Inputvalue.current.value = "";
  };
  const handleSubtraction = () => {
    Dispatch(counteractions.Subtraction(Inputvalue.current.value));
    Inputvalue.current.value = "";
  };
  const handleToggle = () => {
    Dispatch(privacyaction.toggle());
  };
  return (
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleIncrement}
      >
        +1
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={handleDecrement}
      >
        -1
      </button>
      <input type="number" placeholder="Enter Number" ref={Inputvalue} />
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleAddition}
      >
        Add
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleSubtraction}
      >
        Subtract
      </button>
      <button type="button" className="btn btn-warning" onClick={handleToggle}>
        Privacy Toggle
      </button>
    </div>
  );
};
export default Controls;
