import { createGlobalStyle } from "styled-components/macro"
import { normalize } from "styled-normalize"

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  html { 
    font-size:62.5%; 
  }

  body {
    font-size:16px;
    font-size: 1.6rem;
    margin: 0;
    font-family: sans-serif;
  }
  
  * {
  box-sizing: border-box;
  }
  
  h3 {
    margin: 0;
  }
  
  h4 {
    margin: 0;
  }
  
  p {
    margin: 0;
  }
  
  ul {
    margin: 0;
  }
`
