import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [dark, setDark] = useState(false);
  const change = () => {
    if (document.body.classList.contains("light")) {
      document.body.classList.toggle("dark");
      setDark(!dark);
    }
  };

  return (
    <header>
      <div className="container header-cont">
        <h1>Where in the world?</h1>
        <div className="themer" onClick={change}>
          {!dark ? (
            <>
              <FontAwesomeIcon icon={faMoon} style={{ height: "20px" }} />
              <span>Dark Mode</span>
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faSun} style={{ height: "20px" }} />
              <span>Light Mode</span>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
