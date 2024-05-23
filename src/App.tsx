import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/themes/default.ts'
import { GlobalStyle } from './styles/global.ts'
import { Container } from './App.ts'
import { Projects } from './components/organisms/Projects/index.tsx'
import { Header } from './components/organisms/Header/index.tsx'
import { Hero } from './components/organisms/Hero/index.tsx'

const projectIds = [1, 2, 3]

export function App() {
  return(
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <Header />
        <Hero />
        <div>
          {projectIds.map((projectId, index) => (
            <Projects
              key={projectId}
              projectId={projectId}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  )
}


