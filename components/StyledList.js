import styled, { css } from "styled-components";

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  padding-left: 2rem;
  padding-right: 2rem;
  ${(props) =>
    props.isOnCard &&
    css`
      margin-top: 7rem;
    `}
  ${(props) =>
    props.isOnEntryList &&
    css`
      gap: 0.5rem;
      margin: 1rem;
      align-items: center;
    `}
`;

export default StyledList;
