import styled from "styled-components";
import { typography } from "../../styles/typography";

export const HeroContainer = styled.header`
  display: flex;
  align-items: center;
  align-content: center;
  gap: 2rem;

  img{
    height: 28rem;
  }
  .separator{
    padding-bottom: 3rem;
    border-bottom: 1px solid ${(props)=>props.theme.colors['separator-color']};
  }
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .typed-out {
    ${typography.fonts.spanHero};
    
  }
  h3{
    color: ${(props)=> props.theme.colors['primary-color']};
  }
`