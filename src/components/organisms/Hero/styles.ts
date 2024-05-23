import styled from "styled-components";
import { typography } from "../../../styles/typography";

export const HeroContainer = styled.header`
  img{
    height: 28rem;
  }
  .separator{
    padding-bottom: 3rem;
    border-bottom: 2px solid ${(props)=>props.theme.colors['separator-color']};
    &:hover{
      border-bottom: 2px solid ${(props)=>props.theme.colors['primary-color']};
    }
  }
  @media only screen and (max-width: 768px) {
   img{
    width: 90%;
   } 
  }
`

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  div{
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    .typed-out {
    ${typography.fonts.spanHero};
    
  }
    h3{
      color: ${(props)=> props.theme.colors['primary-color']};
    }
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  } 
`