import { keyframes } from 'styled-components';

export const tada = keyframes`
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