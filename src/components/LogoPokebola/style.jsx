import { tada } from '../../animations/tada';
import styled from "styled-components"

export const PokebolaAnime = styled.img`
  animation: ${tada} 3s infinite;

  @media (max-width: 768px) {       
      display: none;    
  }
`;