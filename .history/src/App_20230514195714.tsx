import React from "react";
import LogIn from "./pages/Login/LogIn";
import Dashboard from "./pages/Dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />}/>
        <Route path="/dashboard" element={<LogIn />}/>
      </Routes>
     
    </Router>
  );
}

export default App;
