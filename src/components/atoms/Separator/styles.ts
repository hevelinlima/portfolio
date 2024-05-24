import styled from "styled-components";

export const SeparatorSection = styled.div`
  padding-bottom: 3rem;
  border-bottom: 2px solid ${(props)=>props.theme.colors['separator-color']};
  &:hover{
    border-bottom: 2px solid ${(props)=>props.theme.colors['primary-color']};
  }
`