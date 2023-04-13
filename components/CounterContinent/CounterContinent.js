import StyledDiv from "../StyledDiv";
import StyledCounterContinent from "./StyledCounterContinent";
import styled from "styled-components";

const StyledProgressBar = styled.div`
  margin-top: 1rem;
  border: 1px solid black;
  border-radius: 0.5rem;
  height: 1rem;
  width: 10rem;
`;

export default function CounterContinent({ countries, countriesInfo }) {
  const allContinents = [
    {
      name: "Europe",
      countries: countries.filter((country) => country.region === "Europe"),
    },
    {
      name: "Asia",
      countries: countries.filter((country) => country.region === "Asia"),
    },
    {
      name: "Africa",
      countries: countries.filter((country) => country.region === "Africa"),
    },
    {
      name: "North America",
      countries: countries.filter(
        (country) =>
          country.region === "Americas" && country.subregion === "North America"
      ),
    },
    {
      name: "South America",
      countries: countries.filter(
        (country) =>
          country.region === "Americas" && country.subregion == "South America"
      ),
    },
    {
      name: "Oceania",
      countries: countries.filter((country) => country.region === "Oceania"),
    },
    {
      name: "Antarctica",
      countries: countries.filter((country) => country.region === "Antarctic"),
    },
  ];

  const continentCounts = allContinents.map((continent) => {
    const visitedCountries = continent.countries.filter((country) =>
      countriesInfo
        .filter((info) => info.isVisited)
        .find((info) => info.name === country.name.common)
    );

    return {
      name: continent.name,
      visitedCount: visitedCountries.length,
      totalCount: continent.countries.length,
    };
  });

  return (
    <>
      {continentCounts
        .map((continent) => ({
          ...continent,
          key: continent.name,
        }))
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((continent) => (
          <StyledDiv withBorder key={continent.name}>
            <h3>{continent.name}</h3>
            <article>
              <StyledCounterContinent>
                {continent.visitedCount} / {continent.totalCount}{" "}
                <StyledProgressBar></StyledProgressBar>
              </StyledCounterContinent>
            </article>
          </StyledDiv>
        ))}
    </>
  );
}
