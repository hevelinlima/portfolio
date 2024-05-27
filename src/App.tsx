import styled, { ThemeProvider, keyframes } from 'styled-components'
import { defaultTheme } from './styles/themes/default.ts'
import { GlobalStyle } from './styles/global.ts'
import { Container, Footer, ProjectCards, ProjectSection } from './App.ts'
import { Projects } from './components/organisms/Projects/index.tsx'
import { Header } from './components/organisms/Header/index.tsx'
import { Hero } from './components/organisms/Hero/index.tsx'
import { useTranslation } from 'react-i18next'
import { Separator } from './components/atoms/Separator/index.tsx'
import { AboutMe } from './components/organisms/AboutMe/index.tsx'
import { Contacts } from './components/organisms/Contacts/index.tsx'

const drop = keyframes`
  0% {
    top: -10%;
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  100% {
    top: 100%;
    opacity: 0;
  }
`;

const RainContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
  overflow: hidden;
`;

const Raindrop = styled.div<{ delay: string, left: number }>`
  position: absolute;
  bottom: 100%;
  width: 2px;
  height: 80px;
  background: rgba(255, 255, 255, 0.2);
  animation: ${drop} 1s linear infinite;
  animation-delay: ${(props) => props.delay};
  left: ${(props) => props.left}%;
`;

const generateRaindrops = (numDrops: number) => {
  const drops = [];
  for (let i = 0; i < numDrops; i++) {
    const left = Math.random() * 100;
    const delay = Math.random() * -15 + 's';
    drops.push(<Raindrop key={i} left={left} delay={delay} />);
  }
  return drops;
};



const projectIds = [1, 2, 3];

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
      <RainContainer>{generateRaindrops(50)}</RainContainer>
    </ThemeProvider>
  )
}


