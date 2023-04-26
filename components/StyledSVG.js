import styled, { css } from "styled-components";

const StyledSVG = styled.div`
  ${(props) =>
    props.positionSVG &&
    css`
      display: flex;
      justify-content: center;
      margin-bottom: 0.3rem;
    `}
  background: transparent;
  border: none;
`;

export default StyledSVG;
