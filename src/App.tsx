import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default.ts'
import { GlobalStyle } from './styles/global.ts'
import { Container, Footer, ProjectCards, ProjectSection, RainContainer, Raindrop } from './App.ts'
import { Projects } from './components/organisms/Projects/index.tsx'
import { Header } from './components/organisms/Header/index.tsx'
import { Hero } from './components/organisms/Hero/index.tsx'
import { useTranslation } from 'react-i18next'
import { Separator } from './components/atoms/Separator/index.tsx'
import { AboutMe } from './components/organisms/AboutMe/index.tsx'
import { Contacts } from './components/organisms/Contacts/index.tsx'


const generateRaindrops = (numDrops: number) => {
  const drops = [];
  for (let i = 0; i < numDrops; i++) {
    const left = Math.random() * 100;
    const delay = Math.random() * -15 + 's';
    drops.push(<Raindrop key={i} left={left} delay={delay} />);
  }
  return drops;
};



const projectIds = [1, 2, 3, 4];

export function App() {
  const { t } = useTranslation("global")
  return(
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <div className='header-main'>
          <Header />
          <Hero id="hero"/>
        </div>
       
        <ProjectSection id="projects">
          <h2>{t("projects.title")}</h2>
          <ProjectCards>
            {projectIds.map((projectId, index) => (
              <Projects
                key={projectId}
                projectId={projectId}
                reverse={index % 2 !== 0}
              />
            ))}
          </ProjectCards>
        </ProjectSection>
        <Separator />
        <AboutMe id="aboutme" />
      </Container>
      <Contacts id="contact" />
      <Footer>
        <p>&copy; {t("footer.content")}</p>
      </Footer>
      <GlobalStyle />
      <RainContainer>{generateRaindrops(60)}</RainContainer>
    </ThemeProvider>
  )
}


