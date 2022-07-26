import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/svg/logo.svg";

import "./navbar.css";

export const Navbar = () => {
  let activeStyle = {
    color: "#fff",
    fontSize: "16px",
  };
  let disactiveStyle = {
    color: "red",
    fontSize: "13px",
  };
  return (
    <div className="nav__container">
      <div className="nav__content">
        <img src={logo} alt="logo" />
        <ul className="nav__menu">
          <li>
            <NavLink
              to={"/"}
              style={({ isActive }) =>
                isActive ? activeStyle : disactiveStyle
              }
            >
              CheckList
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/grafica"}
              style={({ isActive }) =>
                isActive ? activeStyle : disactiveStyle
              }
            >
              Grafica
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/dinamica"}
              style={({ isActive }) =>
                isActive ? activeStyle : disactiveStyle
              }
            >
              T-Dinamica
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
