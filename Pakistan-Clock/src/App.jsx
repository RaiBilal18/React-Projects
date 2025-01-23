import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "./components/Heading";
import Slogan from "./components/Slogan";
import Currenttime from "./components/Currenttime";
function App() {
  return (
    <div className="centre">
      <Heading></Heading>
      <Slogan></Slogan>
      <Currenttime></Currenttime>
    </div>
  );
}

export default App;
