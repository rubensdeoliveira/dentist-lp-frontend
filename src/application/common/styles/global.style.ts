import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: ${({ theme }) => theme.colors.background};
  }

  body, input, textarea, button {
    font-family: ${({ theme }) => theme.fonts.family.body};
    font-weight: 400;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.font};
  }

  button {
    cursor: pointer;
  }
`
