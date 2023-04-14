import styled, { css } from "styled-components";

const StyledButton = styled.button`
  border-radius: 1rem;
  ${(props) =>
    props.isHidingForm &&
    css`
      margin: 0.5rem 6rem 0.5rem 6rem;
    `}
`;

export default StyledButton;
