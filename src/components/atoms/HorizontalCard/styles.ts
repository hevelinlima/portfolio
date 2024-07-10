import styled from "styled-components";

export const HorizontalCardContainer = styled.div`
  max-width: 62rem;
  width: auto;
  border: 1px solid white;
  border-radius: 8px;
  padding: 2rem;
  margin: 1rem;

  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.25rem;
  @media (max-width: 1000px) {
    p{
      display: none;
    }
  }

` 