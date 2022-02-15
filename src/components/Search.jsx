import React from "react";
import "../all.min.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = () => {
  return (
    <div className="search">
      <div className="container search-cont">
        <div className="input-holder">
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          <input type="text" placeholder="Search for a country..." />
        </div>
        <a className="regions" href="#">
          <span>Filter by Region</span>
          <span>
            <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
          </span>
          {/* make this position absolute you know the rest */}
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
