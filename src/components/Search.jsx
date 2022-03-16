import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

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
        <form className="input-holder" onSubmit={onSubmit}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
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
            <FontAwesomeIcon icon={faChevronDown} />
          </span>
          <ul
            onClick={(e) => {
              onFilter(e.target.innerHTML);
            }}
          >
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
