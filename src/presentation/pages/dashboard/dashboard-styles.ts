import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
    letter-spacing: 0.05rem;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  body {
    background-color: #f8fafb;
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
