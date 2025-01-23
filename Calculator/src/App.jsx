import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import InputContainer from "./components/InputContainer";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";

function App() {
  let [calval, setcalval] = useState("");
  let handlebtnclick = () => {
    let Buttontext = event.target.textContent;
    if (Buttontext === "C") {
      setcalval("");
    } else if (Buttontext === "=") {
      let result = eval(calval);
      setcalval(result);
    } else {
      let DisplayValue = calval + Buttontext;
      setcalval(DisplayValue);
    }
  };
  return (
    <div id="Calculator" className={styles.CalculatorContainer}>
      <InputContainer DisplayCalVal={calval}></InputContainer>
      <ButtonContainer handleClick={handlebtnclick}></ButtonContainer>
    </div>
  );
}

export default App;
