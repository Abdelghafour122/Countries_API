import "./App.css";
import Countries from "./components/Countries";
import Header from "./components/Header";
import Search from "./components/Search";
import CountryDetail from "./components/CountryDetail";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useParams,
  useNavigate,
} from "react-router-dom";
import React, { useEffect, useState } from "react";
import ErrorPage from "./components/ErrorPage";

function App() {
  const [countries, setCountries] = useState([]);
  const { countryName } = useParams();
  // let navigate = useNavigate();

  const getCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all").then(
      (data) => data.json()
    );
    setCountries(response);
  };

  // const findCountry = (countryName) => {
  //   const specCountry = countries.filter((c) => {
  //     return c.name.common.toLowerCase() === countryName;
  //   });
  //   console.log(specCountry);
  //   // console.log(countries);
  //   specCountry && setCountries(specCountry);
  // };

  const findCountry = async (countryName) => {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}`
    )
      .then((data) => data.json())
      .catch(() => {
        console.error("err what ht");
      });
    setCountries(response);
    // console.log(response);
  };

  const filterCountry = (region) => {
    // USE API REQUESTS
  };

  useEffect(() => {
    getCountries();
  }, []);
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Search
                  countries={countries}
                  onFilter={filterCountry}
                  onFind={findCountry}
                />{" "}
                <Countries countries={countries} />
              </>
            }
          ></Route>
          <Route path="/countries/:name" element={<CountryDetail />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
