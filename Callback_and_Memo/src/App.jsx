import { useCallback, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Heading from "./components/Heading";
import AddButton from "./components/addButton";

function App() {
  const [count, setCount] = useState(0);

  const updatetimer = useCallback(() => {
    setCount((prev) => prev + 1);
  }, [count]);
  return (
    <>
      <Heading count={count}></Heading>
      <AddButton updatetimer={updatetimer}></AddButton>
    </>
  );
}

export default App;
