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
      <span>
        <strong>Capital: </strong>
        {capital}
      </span>
      <span>
        <strong>Continent: </strong>
        {continent}
      </span>
      <StyledFlag>{flag}</StyledFlag>
    </StyledCard>
  );
}
