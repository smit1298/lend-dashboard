import React from "react";
import LogIn from "./pages/Login/LogIn";
import Dashboard from "./pages/Dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    < className="App">
      <LogIn />
      <Dashboard />
    </>
  );
}

export default App;
