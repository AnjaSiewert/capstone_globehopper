export default function FilterContinents({ countries, setFilteredCountries }) {
  console.log(countries);

  const handleSelect = (event) => {
    const selectedContinent = event.target.value;
    if (selectedContinent === "all") {
      setFilteredCountries(countries);
    } else if (selectedContinent === "africa") {
      setFilteredCountries(
        countries.filter((country) => {
          return country.region === "Africa";
        })
      );
    } else if (selectedContinent === "asia") {
      setFilteredCountries(
        countries.filter((country) => {
          return country.region === "Asia";
        })
      );
    } else if (selectedContinent === "europe") {
      setFilteredCountries(
        countries.filter((country) => {
          return country.region === "Europe";
        })
      );
    } else if (selectedContinent === "north america") {
      setFilteredCountries(
        countries.filter((country) => {
          return country.continents.includes("North America");
        })
      );
    } else if (selectedContinent === "oceania") {
      setFilteredCountries(
        countries.filter((country) => {
          return country.region === "Oceania";
        })
      );
    } else if (selectedContinent === "south america") {
      setFilteredCountries(
        countries.filter((country) => {
          return country.continents.includes("South America");
        })
      );
    }
  };
  return (
    <>
      <select onChange={handleSelect}>
        <option value="all">All</option>
        <option value="africa">Africa</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="north america">North America</option>
        <option value="oceania">Oceania</option>
        <option value="south america">South America</option>
      </select>
    </>
  );
}
