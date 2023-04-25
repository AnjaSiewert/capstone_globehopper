import StyledDiv from "../StyledDiv";
import StyledProgressBar from "../StyledProgressBar";
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
      percent: (
        (visitedCountries.length / continent.countries.length) *
        100
      ).toFixed(2),
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
            <h2>{continent.name}</h2>
            <article>
              <StyledCounterContinent>
                {continent.visitedCount} / {continent.totalCount}{" "}
                <StyledProgressBar
                  percent={continent.percent}
                ></StyledProgressBar>
              </StyledCounterContinent>
            </article>
          </StyledDiv>
        ))}
    </>
  );
}
