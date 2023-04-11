import StyledDiv from "../StyledDiv";
import StyledCounterContinent from "./StyledCounterContinent";

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
      {continentCounts.map((continent) => (
        <StyledDiv withBorder key={continent.name}>
          <h3>{continent.name}</h3>
          <p>
            <StyledCounterContinent>
              {continent.visitedCount} / {continent.totalCount}{" "}
            </StyledCounterContinent>
          </p>
        </StyledDiv>
      ))}
    </>
  );
}
