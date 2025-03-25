import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ love }) => {
  return (
    <nav className="navigation flex bg-gray-800 text-white gap-4 p-4">
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/fav">Favourites</NavLink>
      <NavLink>{love}</NavLink>
    </nav>
  );
};

export default Navbar;
