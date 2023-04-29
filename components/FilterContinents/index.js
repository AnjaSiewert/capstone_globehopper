import StyledFilterContinents from "./StyledFilterContinents";

export default function FilterContinents({ countries, setFilteredCountries }) {
  const handleSelect = (event) => {
    if (event.target.value === "all") {
      setFilteredCountries(countries);
    } else if (event.target.value === "africa") {
      setFilteredCountries(
        countries.filter((country) => country.region === "Africa")
      );
    } else if (event.target.value === "antarctica") {
      setFilteredCountries(
        countries.filter((country) => country.region === "Antarctic")
      );
    } else if (event.target.value === "asia") {
      setFilteredCountries(
        countries.filter((country) => country.region === "Asia")
      );
    } else if (event.target.value === "europe") {
      setFilteredCountries(
        countries.filter((country) => country.region === "Europe")
      );
    } else if (event.target.value === "north america") {
      setFilteredCountries(
        countries.filter((country) => {
          return (
            country.continents.includes("North America") &&
            country.subregion !== "Central America"
          );
        })
      );
    } else if (event.target.value === "oceania") {
      setFilteredCountries(
        countries.filter((country) => {
          return country.region === "Oceania";
        })
      );
    } else if (event.target.value === "south america") {
      setFilteredCountries(
        countries.filter((country) =>
          country.continents.includes("South America")
        )
      );
    } else if (event.target.value === "central america") {
      setFilteredCountries(
        countries.filter((country) => country.subregion === "Central America")
      );
    }
  };

  return (
    <label htmlFor="continent-select">
      <StyledFilterContinents id="continent-select" onChange={handleSelect}>
        <option value="all">Filter by Continent...</option>
        <option value="africa">Africa</option>
        <option value="antarctica">Antarctica</option>
        <option value="asia">Asia</option>
        <option value="central america">Central America</option>
        <option value="europe">Europe</option>
        <option value="north america">North America</option>
        <option value="oceania">Oceania</option>
        <option value="south america">South America</option>
      </StyledFilterContinents>
    </label>
  );
}
