import StyledDiv from "../StyledDiv";

export default function Counter({ onCountVisitedCountries, countries }) {
  return (
    <>
      <StyledDiv>
        <h2>Counter</h2>
        <p>I have been in XY countries of total {countries.length} countries</p>
      </StyledDiv>
    </>
  );
}
