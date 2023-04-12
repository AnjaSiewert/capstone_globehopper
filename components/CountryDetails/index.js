import StyledFlag from "../StyledFlag";
import StyledDiv from "../StyledDiv";

export default function CountryDetails({ countries }) {
  /*   function addSeparators(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  const languagesWithSeparators = Object.values(countries[0].languages).join(
    ", "
  );
 */
  return (
    <StyledDiv isOnDetailsPage>
      <h1>{countries[0].name.common}</h1>
      <p>
        <strong>Continent:</strong> {countries[0].continents}
      </p>
      <p>
        <strong>Subregion:</strong> {countries[0].subregion}
      </p>
      <p>
        <strong>Capital:</strong> {countries[0].capital}
      </p>
      {/*    <p>
        <strong>Population:</strong> {addSeparators(countries[0].population)}
      </p>
      <p>
        <strong>Language: </strong>
        {languagesWithSeparators}
      </p> */}

      {
        <p>
          <strong>Currency: </strong>
          {Object.values(countries[0].currencies).map((currency, index) => (
            <span key={index}>
              {currency.name} <br />
              <strong>Symbol: </strong>
              {currency.symbol}
            </span>
          ))}
        </p>
      }
      <p>
        <strong>Timezone:</strong> {countries[0].timezones}
      </p>
      <p>
        <strong>UN Member:</strong> {countries[0].unMember ? "Yes" : "No"}
      </p>

      <StyledFlag>{countries[0].flag}</StyledFlag>
    </StyledDiv>
  );
}
