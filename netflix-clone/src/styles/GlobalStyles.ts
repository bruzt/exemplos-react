import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  html {
    font-size: 16px;
  }
  
  @media (max-width: 1080px){
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px){
    html {
      font-size: 87.5%;
    }
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #111;
    color: #eee;
    font: 400 1rem Roboto, sans-serif;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  input, select, textarea, button {
    font: inherit;
  }
  
  input, select, textarea {
    background: #eee;
  }
  
  button {
    cursor: pointer;
  }
`;
