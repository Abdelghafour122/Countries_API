import Country from "./Country";

const Countries = ({ countries }) => {
  return (
    <div className="country-holder container" role="list">
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
    </div>
  );
};

export default Countries;
