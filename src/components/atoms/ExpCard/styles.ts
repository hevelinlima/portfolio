import styled from "styled-components";

export const ExpContainer = styled.div`
  max-width: 30rem;
  width: auto;
  border: 1px solid white;
  border-radius: 8px;
  padding: 2rem;
  margin: 1rem;

  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.25rem;

  p{
    font-size: 1.1rem;
    text-align: justify;
  }
  @media (max-width: 1000px) {
    width: auto;
    padding: 1rem;
    margin: 1rem 0;
  }
`