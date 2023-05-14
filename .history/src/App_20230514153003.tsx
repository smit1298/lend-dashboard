import React from "react";
import "./App.scss";
import LogIn from "./pages/Login/LogIn";
import Dashboard from "./pages/Dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <LogIn />
      <Dashboard />
    </div>
  );
}

export default App;
