import VisitedButton from "../VisitedButton/VisitedButton";
import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid grey;
  border-radius: 1.5rem;
`;

const StyledFlag = styled.aside`
  font-size: 3rem;
`;

export default function CountriesPreview({
  countriesInfo,
  onToggleVisited,
  name,
  capital,
  continent,
  flag,
}) {
  return (
    <StyledCard>
      <h3>{name}</h3>
      <span>Capital: {capital}</span>
      <span>Continent: {continent}</span>
      <StyledFlag>{flag}</StyledFlag>
      <VisitedButton
        onToggleVisited={onToggleVisited}
        countriesInfo={countriesInfo}
        name={name}
      />
    </StyledCard>
  );
}
