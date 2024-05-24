import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/themes/default.ts'
import { GlobalStyle } from './styles/global.ts'
import { Container, ProjectCard, ProjectSection } from './App.ts'
import { Projects } from './components/organisms/Projects/index.tsx'
import { Header } from './components/organisms/Header/index.tsx'
import { Hero } from './components/organisms/Hero/index.tsx'
import { useTranslation } from 'react-i18next'

const projectIds = [1, 2, 3]

export function App() {
  const { t } = useTranslation("global")
  return(
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <Header />
        <Hero />
        <ProjectSection>
          <h2>{t("projects.title")}</h2>
          <ProjectCard>
            {projectIds.map((projectId, index) => (
              <Projects
                key={projectId}
                projectId={projectId}
                reverse={index % 2 !== 0}
              />
            ))}
          </ProjectCard>
        </ProjectSection>
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  )
}


