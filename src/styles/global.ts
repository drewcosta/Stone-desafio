import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root{
    --green: #008B57;
    --grey-medium: #8C9CAD;
    --dark-gray: #2E3742;
    --bg-white: #FFFFFF;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body{
    position: relative;
    min-height: 100vh;
    min-width: 100vw;
    
    color: var(--dark-gray);
    background-color: var(--bg-white);
  }
`