import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const change = () => {
    document.body.classList.contains("light") &&
      document.body.classList.toggle("dark");
  };

  return (
    <header>
      <div className="container header-cont">
        <h1>Where in the world?</h1>
        <div className="themer" onClick={change}>
          <FontAwesomeIcon icon={faMoon} style={{ height: "20px" }} />
          <span>Dark Mode</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
