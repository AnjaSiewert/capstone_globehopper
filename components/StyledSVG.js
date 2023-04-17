import styled, { css } from "styled-components";

const StyledSVG = styled.div`
  ${(props) =>
    props.positionSVG &&
    css`
      display: flex;
      justify-content: center;
    `}
  background: transparent;
  border: none;
`;

export default StyledSVG;
