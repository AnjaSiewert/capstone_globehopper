import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledFlag = styled.aside`
  font-size: 3rem;
`;

export default function CountriesPreview({ name, capital, continent, flag }) {
  return (
    <StyledCard>
      <h3>{name}</h3>
      <span>Capital: {capital}</span>
      <span>Continent: {continent}</span>
      <StyledFlag>{flag}</StyledFlag>
    </StyledCard>
  );
}
