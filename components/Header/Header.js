import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  background-color: var(--tourquoise);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`;

export default function Header({ headline }) {
  return (
    <StyledHeader>
      <h1>{headline}</h1>
    </StyledHeader>
  );
}
