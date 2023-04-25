import styled, { css } from "styled-components";

const StyledFlag = styled.aside`
  font-size: 3.5rem;
  ${(props) =>
    props.isOnDetailsPage &&
    css`
      font-size: 5rem;
    `}
`;

export default StyledFlag;
