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

    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background: #333;
      border-radius: 4px;
    }
    
    ::-webkit-scrollbar-thumb {
      background: #555; 
      border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => theme.colors.primary};
    }
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
