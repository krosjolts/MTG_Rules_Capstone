import React from "react";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Keywords from "./Components/Keywords";
import { Route, Routes } from "react-router-dom";

function App() {
  return(
    <>   
      <Nav />
      <div className = "container">
        <Routes>
          <Route path = "/" element = {<Home/>} />
          <Route path = "/Keywords" element = {<Keywords/>} />
        </Routes>
      </div>
    </>
  );
}

export default App