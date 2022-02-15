import "./App.css";
import Countries from "./components/Countries";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  async function getCountries() {
    await fetch("https://restcountries.com/v3.1/all")
      .then((data) => data.json())
      .then((res) => res.forEach((country) => console.log(country)));
  }

  getCountries();
  return (
    <div className="App">
      <Header />
      <Search />
      <Countries />
    </div>
  );
}

export default App;
