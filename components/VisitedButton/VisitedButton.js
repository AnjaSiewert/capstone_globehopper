import Check from "./check.svg";
import styled from "styled-components";

const StyledButton = styled.button`
  background: transparent;
  border: none;
`;

export default function VisitedButton({ onToggleVisited, name, isVisited }) {
  return (
    <>
      <StyledButton
        aria-label="Click"
        onClick={() => {
          onToggleVisited(name);
        }}
      >
        <Check fill={isVisited ? "blue" : "red"} />
      </StyledButton>
    </>
  );
}
