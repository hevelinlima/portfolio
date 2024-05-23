import styled from 'styled-components';

export const ProjectCard = styled.div<{ reverse?: boolean }>`
  display: flex;
  align-items: center;
  margin: 1.25rem 0;
  gap: 1rem;
  
  padding: 1.5rem;
  border-radius: 4px;
  background-color: #322e38;
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

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const LinkIcons = styled.div`
  display: flex;
  gap: 1.5rem;
  margin: 1rem 0 0.5rem 0;

  a{
    text-decoration: none;
    color: white;
    padding: 0.5rem;
    font-weight: bold;
    border-radius: 8px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    transition: box-shadow 0.3s;

    &:hover{
      box-shadow: 0px 4px 15px rgba(163, 228, 201, 0.5);
    }

    .icon-img{
      height: 1.5rem;
      width: auto;
      margin-right: 0;
      margin-left: 0;
    } 
  }
  
`

