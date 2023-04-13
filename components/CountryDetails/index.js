import StyledFlag from "../StyledFlag";
import StyledDiv from "../StyledDiv";

export default function CountryDetails({ selectedCountry }) {
  //console.log(countries);
  console.log("selectedCountyInCountryDetails", selectedCountry);
  function addSeparators(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  if (!selectedCountry) return <h2>is Loading</h2>;
  const languagesWithSeparators = Object.values(selectedCountry.languages).join(
    ", "
  );

  return (
    <StyledDiv isOnDetailsPage>
      <h1>{selectedCountry.name.common}</h1>
      <p>
        <strong>Continent:</strong> {selectedCountry.continents}
      </p>
      <p>
        <strong>Subregion:</strong> {selectedCountry.subregion}
      </p>
      <p>
        <strong>Capital:</strong> {selectedCountry.capital}
      </p>
      <p>
        <strong>Population:</strong> {addSeparators(selectedCountry.population)}
      </p>
      <p>
        <strong>Language: </strong>
        {languagesWithSeparators}
      </p>

      {
        <p>
          <strong>Currency: </strong>
          {Object.values(selectedCountry.currencies).map((currency, index) => (
            <span key={index}>
              {currency.name} <br />
              <strong>Symbol: </strong>
              {currency.symbol}
            </span>
          ))}
        </p>
      }
      <p>
        <strong>Timezone:</strong> {selectedCountry.timezones}
      </p>
      <p>
        <strong>UN Member:</strong> {selectedCountry.unMember ? "Yes" : "No"}
      </p>

      <StyledFlag>{selectedCountry.flag}</StyledFlag>
    </StyledDiv>
  );
}
