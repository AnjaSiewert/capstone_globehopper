import StyledHeader from "./StyledHeader";

export default function Header({ headline }) {
  return (
    <StyledHeader>
      <h1>{headline}</h1>
    </StyledHeader>
  );
}
