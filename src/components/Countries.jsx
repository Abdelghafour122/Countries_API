import Country from "./Country";

const Countries = ({ countries }) => {
  return (
    <main className="country-holder container" role="main">
      {countries.map((country) => {
        const { flags, name, population, region, capital, ccn3 } = country;
        return (
          <>
            <Country
              countryId={ccn3}
              flag={flags}
              name={name.common}
              population={population}
              region={region}
              capital={capital}
            />
          </>
        );
      })}
    </main>
  );
};

export default Countries;
