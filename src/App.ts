import styled from "styled-components";
import { typography } from "./styles/typography";

export const Container = styled.main`
  max-width: 72rem;
  margin: 1.5rem auto;
  padding: 0.5rem 4rem;

  @media only screen and (max-width: 1000px) {
    padding: 0.75rem;
    div{
      padding: 1rem; 
    }
  }
`

export const ProjectSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2{
    ${typography.fonts.textBody};
    background-color: ${(props)=>props.theme.colors["background"]};
    margin-top: -1.8rem;
    padding: 0 1rem 0 1rem;
  }
  @media only screen and (max-width: 768px) {
    margin-top: -1rem;
  }
`

export const ProjectCard = styled.div`
  @media only screen and (max-width: 768px) {
    width: auto; 
  }
`