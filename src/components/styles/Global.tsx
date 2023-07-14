import { createGlobalStyle } from "styled-components";
import Nunito from '../../fonts/nunito.ttf';

export const theme = {
  colors: {
    header: '#eee',
    body: "#fff",
  },
  mobile: '520px',
  tablet: "768px",
  laptop: "1024px"
}

export type MyProps = {
  theme: typeof theme
}

const GlobalStyles = createGlobalStyle<MyProps>`

@font-face {
  font-family: 'Nunito';
  src: local('Nunito'),
      url(${Nunito}) format('truetype');
  font-weight: 400 700;
  font-style: normal;
}

* {
    box-sizing: border-box;
}

body {
    background: ${({ theme }) => theme.colors.body};
    color: #1f1f1f;
    font-family: 'Nunito', sans-serif;
    margin: 0;
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