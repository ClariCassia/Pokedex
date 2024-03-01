import styled, { keyframes } from 'styled-components';

const tada = keyframes`
  0%, 100% {
    transform: scale(1) rotate(0deg);
  }
  30%, 50%, 70%, 90% {
    transform: scale(1) rotate(10deg);
  }
  40%, 60%, 80% {
    transform: scale(1) rotate(-10deg);
  }
`;

export const PokebolaAnime = styled.img`
  animation: ${tada} 3s infinite;

  @media (max-width: 768px) {       
      display: none;    
  }
`;