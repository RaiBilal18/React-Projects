import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import Container from "./components/Container";
import InputItems from "./components/InputItems";
import { useState } from "react";
function App() {
  const [fooditems, setfooditems] = useState([]);
  const handleonKeyDown = () => {
    if (event.key === "Enter") {
      let newfooditems = event.target.value;
      event.target.value = "";
      let newitems = [...fooditems, newfooditems];
      setfooditems(newitems);
    }
  };
  return (
    <>
      <Container>
        <h1 className="SetHeading">Healthy Food</h1>
        <InputItems onKeyDown={handleonKeyDown}></InputItems>
        <ErrorMessage fooditems={fooditems}></ErrorMessage>
        <FoodItems fooditems={fooditems}></FoodItems>
      </Container>
      {/* <Container>
        <h1>
          This is the container that show the messsage which i want to display
          on a screnn
        </h1>
      </Container> */}
    </>
  );
}

export default App;
