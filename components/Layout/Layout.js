import Navigation from "../Navigation";
import styled from "styled-components";

const StyledMain = styled.main`
  margin-bottom: 4rem;
`;

export default function Layout({ children }) {
  return (
    <>
      <StyledMain>{children}</StyledMain>
      <footer>
        <Navigation />
      </footer>
    </>
  );
}
