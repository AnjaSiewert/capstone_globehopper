import styled, { css } from "styled-components";

const StyledButton = styled.button`
  border-radius: 0.5rem;
  font-size: 1rem;
  width: 8rem;
  background-color: #a8c3c5;
  color: var(--anthracite);

  ${(props) =>
    props.isHidingForm &&
    css`
      align-self: center;
      margin-bottom: 0.8rem;
    `}
  ${(props) =>
    props.isSubmit &&
    css`
      margin-bottom: 0.8rem;
    `}

    &:hover {
    transform: scale(1.02);
  }
`;

export default StyledButton;
