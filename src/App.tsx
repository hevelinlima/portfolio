import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header/index.tsx'
import { Hero } from './components/Hero/index.tsx'
import { defaultTheme } from './styles/themes/default.ts'
import { GlobalStyle } from './styles/global.ts'
import { Container } from './App.ts'


export function App() {
  return(
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <Header />
        <Hero />
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  )
}


