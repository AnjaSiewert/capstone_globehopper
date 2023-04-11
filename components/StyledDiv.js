import styled, { css } from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 2rem 2rem 2rem 2rem;
  ${(props) =>
    props.withBorder &&
    css`
      border: 1px solid grey;
      border-radius: 1rem;
      padding: 1rem 1rem 1rem 1rem;
      background-color: var(--lightgrey);
    `}
`;

export default StyledDiv;
