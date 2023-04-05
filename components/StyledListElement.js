import styled, { css } from "styled-components";

const StyledListElement = styled.li`
  ${(props) =>
    props.isOnHomepage &&
    css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 1px solid grey;
      border-radius: 1rem;
      background-color: var(--lightgrey);
    `}
  list-style: none;
  margin: 0.5rem;
  padding-left: 0.5rem;
`;

export default StyledListElement;
