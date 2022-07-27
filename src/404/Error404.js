import React from "react";

import "./error404.css";
import logo from "../assets/svg/error.svg";
import error from "../assets/svg/error2.svg";

export const Error404 = () => {
  return (
    <div className="error404__container">
      <div className="error404__content">
        <img src={logo} alt="error-404" className="error404__img" />
        <div className="error404__pag">
          <h2 className="error404__title2">Pagina en mantenimiento</h2>
          <img src={error} alt="error-404" className="error404__img2" />
        </div>
      </div>
    </div>
  );
};
