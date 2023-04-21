export default function FilterContinents({ countries, setFilteredCountries }) {
  const handleSelect = (event) => {
    if (event.target.value === "africa") {
      setFilteredCountries(
        countries.filter((country) => {
          return country.region === "Africa";
        })
      );
    } else if (event.target.value === "asia") {
      setFilteredCountries(
        countries.filter((country) => {
          return country.region === "Asia";
        })
      );
    } else if (event.target.value === "europe") {
      setFilteredCountries(
        countries.filter((country) => {
          return country.region === "Europe";
        })
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
        countries.filter((country) => {
          return country.continents.includes("South America");
        })
      );
    } else if (event.target.value === "Central America") {
      setFilteredCountries(
        countries.filter((country) => {
          return country.subregion === "Central America";
        })
      );
    }
  };

  return (
    <>
      <select onChange={handleSelect}>
        <option value="">Filter by Continent</option>
        <option value="africa">Africa</option>
        <option value="asia">Asia</option>
        <option value="Central America">Central America</option>
        <option value="europe">Europe</option>
        <option value="north america">North America</option>
        <option value="oceania">Oceania</option>
        <option value="south america">South America</option>
      </select>
    </>
  );
}
