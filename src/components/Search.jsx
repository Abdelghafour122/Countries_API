import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

const Search = ({ onFind, onFilter, onInit }) => {
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
  const findRegion = (e) => {
    onFilter(e.target.innerHTML);
  };

  return (
    <div className="search">
      <div className="container search-cont">
        <form className="input-holder" onSubmit={onSubmit}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input
            type="text"
            placeholder="Search for a country..."
            role="search"
            onChange={(e) => {
              setCountryName(e.target.value);
            }}
          />
        </form>
        <a className="regions" href="#" role="list">
          <span>
            <p>Filter by Region</p>
          </span>
          <span>
            <FontAwesomeIcon icon={faChevronDown} />
          </span>
          <ul>
            <li onClick={(e) => findRegion(e)}>Africa</li>
            <li onClick={(e) => findRegion(e)}>America</li>
            <li onClick={(e) => findRegion(e)}>Asia</li>
            <li onClick={(e) => findRegion(e)}>Europe</li>
            <li onClick={(e) => findRegion(e)}>Oceania</li>
            <li
              onClick={() => {
                onInit();
              }}
            >
              All Regions
            </li>
          </ul>
        </a>
      </div>
    </div>
  );
};

export default Search;
