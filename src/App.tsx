import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header/Header.tsx'
import { Home } from './components/Home'
import { defaultTheme } from './styles/themes/default.ts'
import { GlobalStyle } from './styles/global.ts'
import headerImage from '/header-image.svg'

export function App() {
  return(
    <ThemeProvider theme={defaultTheme}>
     <Header />
      <Home />
        <img src={ headerImage } alt="" />
        <button>CONTACT ME</button>
      <GlobalStyle />
    </ThemeProvider>
  )
}


