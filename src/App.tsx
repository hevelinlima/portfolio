import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header/index.tsx'
import { Home } from './components/Home'
import { defaultTheme } from './styles/themes/default.ts'
import { GlobalStyle } from './styles/global.ts'
import { Container } from './App.ts'


export function App() {
  return(
    <ThemeProvider theme={defaultTheme}>
      <Header />
     <Container>
      
      <Home />
     </Container>
        
      <GlobalStyle />
    </ThemeProvider>
  )
}


