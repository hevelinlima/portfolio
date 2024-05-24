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
`