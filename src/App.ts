import styled, { keyframes } from "styled-components";
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

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 1rem;

  font-size: 0.85rem;
`

export const drop = keyframes`
  0% {
    top: -10%;
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  100% {
    top: 100%;
    opacity: 0;
  }
`;

export const RainContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  overflow: hidden;
`;

export const Raindrop = styled.div<{ delay: string, left: number }>`
  position: absolute;
  bottom: 100%;
  width: 1.5px;
  height: 1.5rem;
  background: rgba(255, 255, 255, 0.2);
  animation: ${drop} 1s linear infinite;
  animation-delay: ${(props) => props.delay};
  left: ${(props) => props.left}%;
`;