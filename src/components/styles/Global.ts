import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
}

body {
    background: ${({ theme }) => theme.colors.body};
    color: hsl(192, 100%, 9%);
    font-family: 'Nunito', sans-serif;
    margin: 0;
    font: 400 1rem Nunito, sans-serif;
}

p {
    opacity: 0.6;
    line-height: 1.5;
  }

  img {
    max-width: 100%;
}

    a {
        background-color: transparent;
    }
`

export default GlobalStyles;