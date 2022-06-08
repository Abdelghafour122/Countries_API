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

  const REGIONS = ["Africa", "America", "Asia", "Europe", "Oceania"];

  return (
    <div className="search">
      <div className="container search-cont">
        <form className="input-holder" onSubmit={onSubmit}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input
            type="text"
            placeholder="Search for a country..."
            role="form"
            value={countryName}
            onChange={(e) => {
              setCountryName(e.target.value);
            }}
          />
        </form>
        <a
          className="regions"
          href="#"
          role="link"
          aria-label="Choose from the regions below"
        >
          <p>Filter by Region</p>
          <span>
            <FontAwesomeIcon icon={faChevronDown} />
          </span>
          <ul>
            {REGIONS.map((ev, index) => {
              return (
                <li key={index} onClick={(e) => findRegion(e)}>
                  {REGIONS[index]}
                </li>
              );
            })}
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
