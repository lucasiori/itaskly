import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
  }

  body {
    background-color: #f8fafb;
  }

  h1, h2, h3, h4, h5, h6, strong {
    letter-spacing: 0.05rem;
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

export const DashboardContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
