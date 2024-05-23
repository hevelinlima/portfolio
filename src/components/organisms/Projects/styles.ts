import styled from 'styled-components';

export const ProjectCard = styled.div<{ reverse?: boolean }>`
  display: flex;
  align-items: center;
  margin: 1.25rem 0;
  
  padding: 1.25rem;
  border-radius: 4px;
  background-color: #121121;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};

  img {
    width: 25rem;
    height: auto;
    border-radius: 30px;
    margin-right: ${({ reverse }) => (reverse ? '0' : '1.25rem')};
    margin-left: ${({ reverse }) => (reverse ? '1.25rem' : '0')};
  }

  .description {
    text-align: justify;
    flex: 1;
  }
`

export const LinkIcons = styled.div`
  a{
    img{
      height: 1.5rem;
      width: auto;
    }
  }
`

