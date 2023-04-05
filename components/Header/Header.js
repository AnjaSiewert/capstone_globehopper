import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  background-color: var(--tourquoise);
`;

export default function Header({ headline }) {
  return (
    <StyledHeader>
      <h1>{headline}</h1>
    </StyledHeader>
  );
}
