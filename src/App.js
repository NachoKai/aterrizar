import React from "react";
import "./styles/normalize.css";
import Navbar from "./components/Navbar/Navbar";
import Searchbox from "./components/Searchbox/Searchbox";
import ModuleWrapper from "./components/ModuleWrapper/ModuleWrapper";
import Banners from "./components/Banners/Banners";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Searchbox></Searchbox>
      <ModuleWrapper></ModuleWrapper>
      <Banners></Banners>
    </div>
  );
}

export default App;
