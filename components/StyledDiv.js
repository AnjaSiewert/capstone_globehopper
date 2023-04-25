import styled, { css } from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 1.5rem 4.5rem 1.5rem 4.5rem;
  ${(props) =>
    props.withBorder &&
    css`
      border: 1px solid grey;
      border-radius: 1rem;
      padding: 0rem 0.5rem 1rem 0.5rem;
      background-color: var(--lightgrey);
    `}
  ${(props) =>
    props.isOnDetailsPage &&
    css`
      margin-top: 5rem;
    `}
    ${(props) =>
    props.isShowingImage &&
    css`
      margin-top: 7rem;
    `}
`;

export default StyledDiv;
