import styled, { css } from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  ${(props) =>
    props.withBorder &&
    css`
      border: 1px solid grey;
      border-radius: 1rem;
      padding: 0rem 0.5rem 1rem 0.5rem;
      background-color: var(--lightgrey);
      margin: 1.5rem 4.5rem 1.5rem 4.5rem;
    `}
  ${(props) =>
    props.withBorderTotal &&
    css`
      border: 1px solid grey;
      border-radius: 1rem;
      padding: 0rem 0.5rem 1.5rem 0.5rem;
      background-color: var(--lightgrey);
      margin: 1.5rem 3rem 1.5rem 3rem;
      font-size: 1.5rem;
    `}
  ${(props) =>
    props.isOnDetailsPage &&
    css`
      margin: 6rem 1rem 0rem 1rem;
      gap: 1rem;
    `}
    ${(props) =>
    props.isShowingImage &&
    css`
      margin-top: 7rem;
    `}
`;

export default StyledDiv;
