import Country from "./Country";
import LoadingMessage from "./LoadingMessage";

const Countries = ({ countries, onLoad }) => {
  return (
    <main className="country-holder container" role="main">
      {onLoad ? (
        <LoadingMessage />
      ) : (
        countries.map((country, index) => {
          const { flags, name, population, region, capital, ccn3 } = country;
          return (
            <Country
              key={index}
              countryId={ccn3}
              flag={flags}
              name={name.common}
              population={population}
              region={region}
              capital={capital}
            />
          );
        })
      )}
    </main>
  );
};

export default Countries;
