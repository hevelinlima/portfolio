import styled from "styled-components";
import { typography } from "../../styles/typography";


export const HeaderContainer = styled.nav`
  ${typography.fonts.textNav};
  padding: 1rem 0;
  background-color: ${(props)=>props.theme.colors['background']};
  
  ul{
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    a{
      text-decoration: none;
    }
  } 
`

export const FirstItem = styled.li`
  ${typography.fonts.titleNav};
  
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