import React from "react";
import LogIn from "./pages/Login/LogIn";
import Dashboard from "./pages/Dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path=""/>
         <LogIn />
      <Dashboard />
      </Routes>
     
    </Router>
  );
}

export default App;
