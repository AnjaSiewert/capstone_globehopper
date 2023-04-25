import styled from "styled-components";

const StyledProgressBar = styled.div`
  margin-top: 1rem;
  border: 1px solid black;
  border-radius: 0.5rem;
  height: 1rem;
  width: 6rem;
  background-color: white;

  &::before {
    content: "";
    display: block;
    height: 100%;
    width: 100%;
    background-color: var(--tourquoise);
    border-radius: inherit;
    padding-left: 15px;
    width: ${(props) => `${props.percent}%`};
  }
`;

export default StyledProgressBar;
