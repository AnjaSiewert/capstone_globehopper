import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --tourquoise: #9ac6bc;
    --lightgrey: #ece7e9;
  }

  body {
    margin: 0;
    font-family: system-ui;  
  }

  a {
    text-decoration: none;
    color: black;
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

`;
