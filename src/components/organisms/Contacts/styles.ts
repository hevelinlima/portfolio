import styled from "styled-components";
import { typography } from "../../../styles/typography";

export const ContactsSection = styled.section`
  background-color: ${(props)=>props.theme.colors.contacts};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;

  margin: 1.5rem auto;
  padding: 1rem 4rem;
`

export const HeaderContacts = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  span{
    ${typography.fonts.textHero};
    flex-wrap: wrap;
  }
  h2{
    ${typography.fonts.titleNav};
    line-height: 1.2;
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
