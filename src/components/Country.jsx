import React from "react";
import { Link } from "react-router-dom";

const Country = ({ countryId, flag, name, population, region, capital }) => {
  return (
    <div className="country" key={countryId}>
      <img src={flag.svg} alt="didn't work" />
      <div className="text">
        <h3>{name}</h3>
        <p>
          Population: <span>{population}</span>
        </p>
        <p>
          Region: <span>{region}</span>
        </p>
        <p>
          Capital: <span>{capital}</span>
        </p>
        <Link to={`/countries/${name}`}>Learn More</Link>
      </div>
    </div>
  );
};

export default Country;
