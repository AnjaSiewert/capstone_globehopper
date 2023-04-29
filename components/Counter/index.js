import StyledDiv from "../StyledDiv";
import StyledHeadline from "../StyledHeadline";
import StyledProgressBar from "../StyledProgressBar";

export default function Counter({ countries, countriesInfo }) {
  const countVisitedCountries = countriesInfo.filter((info) => info.isVisited);
  const percentVisited =
    (countVisitedCountries.length / countries.length) * 100;

  return (
    <>
      <StyledDiv withBorderTotal>
        <StyledHeadline>The World</StyledHeadline>
        {countVisitedCountries.length} /{countries.length}
        <StyledProgressBar
          data-testid="progress-bar"
          percent={percentVisited}
        />
      </StyledDiv>
    </>
  );
}
