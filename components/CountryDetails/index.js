import StyledFlag from "../StyledFlag";
import StyledDiv from "../StyledDiv";

export default function CountryDetails({ data }) {
  function addSeparators(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  const languagesWithSeparators = Object.values(data[0].languages).join(", ");

  return (
    <StyledDiv isOnDetailsPage>
      <h1>{data[0].name.common}</h1>
      <p>
        <strong>Continent:</strong> {data[0].continents}
      </p>
      <p>
        <strong>Subregion:</strong> {data[0].subregion}
      </p>
      <p>
        <strong>Capital:</strong> {data[0].capital}
      </p>
      <p>
        <strong>Population:</strong> {addSeparators(data[0].population)}
      </p>
      <p>
        <strong>Language: </strong>
        {languagesWithSeparators}
      </p>

      {
        <p>
          <strong>Currency: </strong>
          {Object.values(data[0].currencies).map((currency, index) => (
            <span key={index}>
              {currency.name} <br />
              <strong>Symbol: </strong>
              {currency.symbol}
            </span>
          ))}
        </p>
      }
      <p>
        <strong>Timezone:</strong> {data[0].timezones}
      </p>
      <p>
        <strong>UN Member:</strong> {data[0].unMember ? "Yes" : "No"}
      </p>

      <StyledFlag>{data[0].flag}</StyledFlag>
    </StyledDiv>
  );
}
