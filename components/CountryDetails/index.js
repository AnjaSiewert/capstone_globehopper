import StyledFlag from "../StyledFlag";
import StyledDiv from "../StyledDiv";
import styled from "styled-components";

const StyledLink = styled.a`
  font-size: 2rem;
  position: relative;
  right: 9rem;
  top: 1rem;
`;

export default function CountryDetails({ selectedCountry }) {
  function addSeparators(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  if (!selectedCountry) {
    return <h2>is Loading</h2>;
  }

  const languagesWithSeparators =
    selectedCountry.languages &&
    Object.values(selectedCountry.languages).join(", ");

  const timezoneWithSeparators = selectedCountry.timezones?.join(", ");

  return (
    <StyledDiv isOnDetailsPage>
      <StyledLink href="/list">🔙</StyledLink>
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
          {selectedCountry.currencies &&
            Object.values(selectedCountry.currencies).map((currency, index) => (
              <span key={index}>{currency.name}</span>
            ))}
        </p>
      }
      <p>
        <strong>Timezone:</strong> {timezoneWithSeparators}
      </p>
      <p>
        <strong>UN Member:</strong> {selectedCountry.unMember ? "Yes" : "No"}
      </p>

      <StyledFlag>{selectedCountry.flag}</StyledFlag>
    </StyledDiv>
  );
}
