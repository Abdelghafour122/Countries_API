import React from "react";
import "../all.min.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header>
      <h1>Where in the world?</h1>
      <div className="themer">
        {/* CHANGE THE ICON BASED ON THE THEME, LIGHT: FA-REGULAR / DARK: FA-SOLID */}
        <FontAwesomeIcon icon="fa-regular fa-moon" style={{ height: "20px" }} />
        <span>Dark Mode</span>
      </div>
    </header>
  );
};

export default Header;
