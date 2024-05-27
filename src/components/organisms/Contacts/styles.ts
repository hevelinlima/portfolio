import styled from "styled-components";
import { typography } from "../../../styles/typography";

export const ContactsSection = styled.section`
  background-color: ${(props)=>props.theme.colors.contacts};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  margin: 1.5rem auto;
  padding: 3rem 4rem;
  @media only screen and (max-width: 768px) {
    padding: 3rem 5rem;
  }
`

export const HeaderContacts = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  span{
    ${typography.fonts.textHero};
    flex-wrap: wrap;
  }
  h2{
    ${typography.fonts.titleNav};
    line-height: 1.2;
  }
  .span-text{
    display: flex;
    flex-direction: column;
    align-items: center;
    span{
      ${typography.fonts.titleNav};
      font-size: 1.25rem;
    }
  }
  @media only screen and (max-width: 768px) {
    h2{
      font-size: 2rem;
    }
  }
`

export const ContactButtons = styled.div`
  display: flex;
  gap: 1rem;
  a{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;

    height: 2.5rem;
    width: 3rem;
    border: none;
    border-radius: 8px;
 

    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    img{
    height: 2rem;
    }
  }
  a:hover {
    transform: scale(1.2); 
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2); 
  }
`

export const EmailButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  border: 2px solid whitesmoke;
  border-radius: 20px;
  color: whitesmoke;
  font-weight: bold;
  padding: 0.5rem 1rem;
  text-decoration: none;
  transition: all 0.2s;
  svg{
    height: 2rem;
  }
  &:hover{
    background-color: #444;
    border: 2px solid #444;
    svg{
      fill: black;
    }
  }
`