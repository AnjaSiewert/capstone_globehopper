import StyledDiv from "../StyledDiv";
import StyledProgressBar from "../StyledProgressBar";

export default function Counter({ countries, countriesInfo }) {
  const countVisitedCountries = countriesInfo.filter((info) => info.isVisited);
  const percentVisited =
    (countVisitedCountries.length / countries.length) * 100;

  return (
    <>
      <StyledDiv>
        <article>
          I have been in <strong>{countVisitedCountries.length}</strong>{" "}
          countries of total {countries.length} countries
        </article>
        <StyledProgressBar percent={percentVisited} />
      </StyledDiv>
    </>
  );
}
