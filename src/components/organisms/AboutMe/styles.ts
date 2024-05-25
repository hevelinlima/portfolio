import styled from "styled-components";
import { typography } from "../../../styles/typography";

export const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -1.8rem;
 
  h2{
    padding: 0 1rem 0 1rem;
    ${typography.fonts.textBody}
    background-color: ${(props)=>props.theme.colors["background"]};
  }
  @media only screen and (max-width: 1000px) {
    margin-top: -1.7rem;
  }
`

export const SkillsSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  padding: 0 2rem;
  img{
    margin: 1.25rem;
    height: 3.5rem;
  }
`

export const ExpContainer =styled.div`
  display: flex;
  flex-wrap: wrap;
  
  @media (max-width: 1000px) {
    padding: 0.5rem;
    width: auto;
  }
`