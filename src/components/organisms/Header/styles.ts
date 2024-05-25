import styled from "styled-components";
import { typography } from "../../../styles/typography";


export const HeaderContainer = styled.nav`
  ${typography.fonts.textNav};
  background-color: ${(props)=>props.theme.colors['background']};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; 
  padding: 0 10rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  ul{
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    a{
      text-decoration: none;
    }
  } 
  @media only screen and (max-width: 1000px) {
    padding: 0 2rem;
  }
`

export const FirstItem = styled.div`
  ${typography.fonts.titleNav};
  
  a{
    color: ${(props)=> props.theme.colors["primary-color"]};
     
    &:hover{
      color: ${(props)=> props.theme.colors["secondary-color"]};
    }  
  }
`

export const OtherItems = styled.div`
  display: flex;
  gap: 2rem;
  a{
    color: ${(props)=> props.theme.colors["secondary-color"]};

    &:hover{
      color: ${(props)=> props.theme.colors["primary-color"]};
      border-bottom: 3px solid ${(props)=>props.theme.colors['primary-color']};
    }
  }

  @media only screen and (max-width: 1000px) {
    display: none;
    &.open{
      display: block;

      position: absolute;
      width: 100%;
      height: calc(100vh - 9rem);
      padding: 2rem 7.5rem;
      top: 4rem;
      right: 0;
      background-color: ${(props)=>props.theme.colors['background']};
    }
    & > * {
      margin-bottom: 1.5rem; 
    }
    & > *:last-child {
      margin-bottom: 0;
    }
  }
`

export const ToggleButton = styled.button`
  display: none;
  background: transparent;
  border: none;

  @media only screen and (max-width: 1000px) {
    display: block;
  }
`