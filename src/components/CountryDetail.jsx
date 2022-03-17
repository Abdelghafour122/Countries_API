import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faHouse } from "@fortawesome/free-solid-svg-icons";
import Attribution from "./Attribution";

const CountryDetail = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();
  let navigate = useNavigate();

  const getBorderCountry = async (borCcode) => {
    const borderCountry = await fetch(
      `https://restcountries.com/v3.1/alpha/${borCcode}`
    ).then((data) => data.json());
    const borderCountryName = borderCountry[0].name.common
      .split(" ")
      .join("%20");
    navigate(`/countries/${borderCountryName}`);
  };

  useEffect(() => {
    const getSpecificData = async () => {
      const tarName = name.split(" ").join("%20");
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${tarName}`
      ).then((data) => data.json());
      setCountry(response);
    };

    getSpecificData();
  }, [name]);

  return (
    <div className="country-details container">
      <div className="guiding-buttons">
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          <FontAwesomeIcon icon={faArrowLeftLong} />
          Back
        </button>
        <button
          onClick={() => {
            navigate("/countries_api");
          }}
        >
          <FontAwesomeIcon icon={faHouse} />
          Back To Homepage
        </button>
      </div>
      <>
        {country.map((cont) => {
          const {
            flags,
            name,
            population,
            region,
            capital,
            ccn3,
            languages,
            currencies,
            subregion,
            tld,
            borders,
          } = cont;
          let namesAvailable = Array.from(Object.values(name.nativeName));
          let currenciesAvailable = Array.from(Object.values(currencies));
          let languagesAvailable = Array.from(Object.values(languages));
          return (
            <div className="core" key={ccn3}>
              <img src={flags.svg} alt={name.common} />
              <div className="text">
                <h1> {name.common} </h1>

                <div className="sub-cont">
                  <div className="right-side">
                    <div className="native-names">
                      {" "}
                      Native Name(s):{" "}
                      {namesAvailable.map((n) => {
                        return <div> {n.common} </div>;
                      })}{" "}
                    </div>
                    <div>
                      Population: <span>{population}</span>
                    </div>
                    <div>
                      Region: <span>{region}</span>
                    </div>
                    <div>
                      Sub Region: <span>{subregion}</span>
                    </div>
                    <div>
                      Capital: <span>{capital}</span>
                    </div>
                  </div>

                  <div className="left-side">
                    <div>
                      Top Level Domain:{" "}
                      <span>
                        {tld.map((t) => {
                          return <span> {t} </span>;
                        })}
                      </span>{" "}
                    </div>
                    <div>
                      Currencies:{" "}
                      <span>
                        {currenciesAvailable.map((c) => {
                          return <span>{c.name}, </span>;
                        })}
                      </span>
                    </div>
                    <div>
                      Languages:{" "}
                      <span>
                        {languagesAvailable.map((lan) => {
                          return `${lan}, `;
                        })}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="borders">
                  Border Countries:{" "}
                  {borders
                    ? borders.map((bor) => (
                        <span
                          onClick={() => {
                            getBorderCountry(bor);
                          }}
                        >
                          {" "}
                          {bor}{" "}
                        </span>
                      ))
                    : "This Country has no neighboring countries!"}
                </div>
              </div>
            </div>
          );
        })}
        <Attribution />
      </>
    </div>
  );
};

export default CountryDetail;
