import styled from "styled-components";
import { typography } from "./styles/typography";

export const Container = styled.main`
  max-width: 72rem;
  margin: 1.5rem auto;
  padding: 0.5rem 4rem;
`

export const ProjectSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2{
    ${typography.fonts.textBody};
    font-weight: bold;
    background-color: ${(props)=>props.theme.colors["background"]};
    margin: -1.8rem 0 0 3rem;
    padding: 0 1rem 0 1rem;
  }
`

export const ProjectCard = styled.div`
  @media only screen and (max-width: 768px) {
    width: auto; 
  }
`