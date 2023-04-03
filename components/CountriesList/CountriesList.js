import VisitedButton from "../VisitedButton/VisitedButton";
import styled from "styled-components";

const StyledListElement = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid grey;
  border-radius: 1rem;
  margin: 0.5rem;
  padding-left: 0.5rem;
  background-color: #ece7e9;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  padding-left: 2rem;
  padding-right: 2rem;
`;

export default function CountriesList({
  countries,
  onToggleVisited,
  countriesInfo,
  name,
}) {
  return (
    <>
      <StyledList>
        {countries
          .map((country) => ({
            key: country.name,
            name: country.name.common,
          }))
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((country) => (
            <StyledListElement key={country.name}>
              {country.name}{" "}
              <VisitedButton
                onToggleVisited={onToggleVisited}
                countriesInfo={countriesInfo}
              />
            </StyledListElement>
          ))}
      </StyledList>
    </>
  );
}
