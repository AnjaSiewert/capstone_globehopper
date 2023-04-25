import styled, { css } from "styled-components";

const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${(props) =>
    props.isCheckbox &&
    css`
      gap: 0.5rem;
    `}
`;

export default StyledFieldset;
