import StyledDiv from "../StyledDiv";
import StyledProgressBar from "../StyledProgressBar";
import styled from "styled-components";

export default function Counter({ countries, countriesInfo }) {
  const countVisitedCountries = countriesInfo.filter((info) => info.isVisited);
  const percentVisited =
    (countVisitedCountries.length / countries.length) * 100;

  const StyledHeadline = styled.h2`
    font-size: 2rem;
  `;

  return (
    <>
      <StyledDiv withBorderTotal>
        <StyledHeadline>The World</StyledHeadline>
        {countVisitedCountries.length} /{countries.length}
        <StyledProgressBar percent={percentVisited} />
      </StyledDiv>
    </>
  );
}
