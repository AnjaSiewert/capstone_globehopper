import styled, { css } from "styled-components";

const StyledListElement = styled.li`
  ${(props) =>
    props.isOnListpage &&
    css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.3rem;
      background-color: var(--lightgrey);
      border-radius: 01rem;
    `}
  ${(props) =>
    props.isOnFavoritesPage &&
    css`
      display: flex;
      flex-direction: column;
      border-radius: 1rem;
      background-color: #f0ebed;
    `}

  list-style: none;
  margin: 0.3rem;
  border: 1px solid grey;
`;

export default StyledListElement;
