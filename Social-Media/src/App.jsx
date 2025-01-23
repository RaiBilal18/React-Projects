import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import Postlistprovider from "./store/Post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  let [selectedTab, setSelectedTab] = useState("Home");
  return (
    <Postlistprovider>
      <div className="App-Container">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="Content-Container">
          <Header></Header>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      </div>
    </Postlistprovider>
  );
}

export default App;
