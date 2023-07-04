import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: ${theme.fontFamily}, sans-serif;
    letter-spacing: 0.05rem;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  html {
    background-color: ${theme.colors.primary};
  }

  body {
    height: 100vh;
    background: ${`linear-gradient(135deg, rgba(119, 75, 247, 0.50) 0%, ${theme.colors.purple} 48.44%, rgba(119, 75, 247, 0.50) 100%)`};
  }

  ul {
    list-style: none;
  }
  
  button {
    background: none;
    border: 0;

    &:not(:disabled) {
      cursor: pointer;
    }
  }
`;
