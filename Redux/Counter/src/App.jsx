import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Showcounter from "./components/showcounter";
import Controls from "./components/Controls";
import Container from "./components/Container";
import Privacy from "./components/Privacytoggle";
import { useSelector } from "react-redux";
function App() {
  let privacyvalue = useSelector((store) => store.privacy);
  return (
    <>
      <center className="px-4 py-5 my-5 text-center">
        <Container>
          <Header></Header>
          <div className="col-lg-6 mx-auto">
            {privacyvalue ? <Showcounter></Showcounter> : <Privacy></Privacy>}
            <Controls></Controls>
          </div>
        </Container>
      </center>
    </>
  );
}

export default App;
