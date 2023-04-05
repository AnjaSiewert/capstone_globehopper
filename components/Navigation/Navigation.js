import Link from "next/link";
import styled from "styled-components";

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export default function Navigation() {
  return (
    <StyledFooter>
      <Link href="/">Home</Link>
      <Link href="/list">List</Link>
      <Link href="/visited">Visited</Link>
    </StyledFooter>
  );
}
