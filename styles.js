import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --tourquoise: #9ac6bc;
    --lightgrey: #D4CFD1;
    --antrazit: #3d3d3d;
    --beige: #F2F2F2;
  }

  body {
    margin: 0;
    font-family: system-ui;  
    color: var(--antrazit);
    background-color: var(--beige);
  }

  fieldset {
    border: none;
  }

  legend {
    text-align: center;
  }

  li {
    list-style: none;
  }

  i {
    text-align: center;
  }

  Image {
    object-fit: cover;
  }


`;
