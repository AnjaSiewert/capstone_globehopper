import styled, { css } from "styled-components";

const StyledButton = styled.div`
  ${(props) =>
    props.positionSVG &&
    css`
      position: relative;
      left: 7.5rem;
    `}
  background: transparent;
  border: none;
`;

export default StyledButton;
