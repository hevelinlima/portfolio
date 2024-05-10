import styled from "styled-components";
import { typography } from "../../styles/typography";


export const HeaderContainer = styled.nav`
  ${typography.fonts.textNav};
  padding: 1rem 0;
  background-color: ${(props)=>props.theme.colors['background']};
  /* border-bottom: 1px solid ${(props)=>props.theme.colors['secondary-color']}; */
  
  ul{
    list-style-type: none;
      
    display: flex;
    align-items: center;
    justify-content: center;
    
    a{
      text-decoration: none;
    }
  } 
`

export const FirstItem = styled.li`
  ${typography.fonts.titleNav};
  padding-right: 15rem;
  a{
    color: ${(props)=> props.theme.colors["primary-color"]}; 
    &:hover{
    color: ${(props)=> props.theme.colors["secondary-color"]};
  }  
  }
`

export const OtherItens = styled.li`
  display: flex;
  gap: 2rem;
  a{
    color: ${(props)=> props.theme.colors["secondary-color"]};

    &:hover{
    color: ${(props)=> props.theme.colors["primary-color"]};
    }
  }
`