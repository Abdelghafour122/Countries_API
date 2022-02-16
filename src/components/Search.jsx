import React, { useState } from "react";
import "../all.min.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = ({ countries, onFind, onFilter }) => {
  const [countryName, setCountryName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!countryName) {
      alert("Please enter a name!");
      return;
    }

    onFind(countryName.toLowerCase());
    setCountryName("");
  };

  return (
    <div className="search">
      <div className="container search-cont">
        {/* MAKE AN ONSUBMIT HERE, CALL A FUNCTION */}
        <form className="input-holder" onSubmit={onSubmit}>
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          <input
            type="text"
            placeholder="Search for a country..."
            onChange={(e) => {
              setCountryName(e.target.value);
            }}
          />
        </form>
        <a className="regions" href="#">
          <span>Filter by Region</span>
          <span>
            <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
          </span>
          <ul>
            <li>Africa</li>
            <li>America</li>
            <li>Asia</li>
            <li>Europe</li>
            <li>Oceania</li>
          </ul>
        </a>
      </div>
    </div>
  );
};

export default Search;
