import styled, { css } from "styled-components";

const StyledListElement = styled.li`
  ${(props) =>
    props.isOnHomepage &&
    css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 0.5rem;
      background-color: var(--lightgrey);
    `}
  ${(props) =>
    props.isOnFavoritesPage &&
    css`
      display: flex;
      flex-direction: column;
    `}

  list-style: none;
  margin: 0.5rem;
  border: 1px solid grey;
  border-radius: 1rem;
`;

export default StyledListElement;
