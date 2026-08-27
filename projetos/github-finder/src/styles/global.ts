import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    -webkit-text-size-adjust: none;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Inter', sans-serif;
    color: ${props => props.theme.colors.text_color}
  }

  button,
  input,
  a {
    font: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  img {
    max-width: 100%;
    display: block;
  }
`;
