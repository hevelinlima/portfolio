import styled from 'styled-components';

export const ProjectCard = styled.div<{ reverse?: boolean }>`
  display: flex;
  align-items: center;
  margin: 1.25px 0;
  
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};

  img {
    width: 30rem;
    height: auto;
    margin-right: ${({ reverse }) => (reverse ? '0' : '20px')};
    margin-left: ${({ reverse }) => (reverse ? '20px' : '0')};
  }

  .description {
    flex: 1;
  }
`;
