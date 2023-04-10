import StyledDiv from "../StyledDiv";

export default function CounterContinent({ countries, countriesInfo }) {
  const countriesInEurope = countries.filter(
    (country) => country.region === "Europe"
  );

  const countVisitedCountriesInEurope = countriesInEurope.filter((country) =>
    countriesInfo
      .filter((info) => info.isVisited)
      .find((info) => info.name === country.name.common)
  );

  return (
    <>
      <StyledDiv>
        <h2>Europe</h2>
        <p>
          I have been in <strong>{countVisitedCountriesInEurope.length}</strong>{" "}
          countries of {countriesInEurope.length} countries in Europe
        </p>
      </StyledDiv>
    </>
  );
}
