import { createGlobalStyle } from 'styled-components'
import { typography } from './typography'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    :focus{
      outline: 0;
      box-shadow: 0 0 2px ${(props) => props.theme.colors["primary-color"]};
    }
  }

  body{
    background: ${(props) => props.theme.colors['background']};
    color: ${(props) => props.theme.colors['secondary-color']};  

    &::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }

    &::-webkit-scrollbar-track {
      background: ${(props)=>props.theme.colors["background"]};
    }

    &::-webkit-scrollbar-thumb {
      background: ${(props)=>props.theme.colors["separator-color"]};
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:active {
      background: ${(props)=>props.theme.colors["contacts"]};
    }  
  }

  body, button, textarea, input{
    ${typography.fonts.textHero};
  }
`