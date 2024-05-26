import styled from "styled-components";
import { typography } from "./styles/typography";

export const Container = styled.main`
  max-width: 72rem;
  margin: 1.5rem auto;
  padding: 0.5rem 4rem;

  @media only screen and (max-width: 1000px) {
    padding: 1rem 0;
    max-width: 20rem;
    margin: 1.5rem auto;
    .header-main{
      padding: 1.5rem 0; 
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
    h2{
      margin-top: -3rem;
    }
  }
`

export const ProjectCards = styled.div`
  width: auto;
  @media only screen and (max-width: 768px) {
    width: auto; 
  }
`