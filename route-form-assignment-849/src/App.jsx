import React from "react";
import Navbar from "./components/Navbar";
import { NavLink, Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;
