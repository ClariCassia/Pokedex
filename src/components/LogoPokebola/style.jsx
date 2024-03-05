import { tada } from '../../animations/tada';

export const PokebolaAnime = styled.img`
  animation: ${tada} 3s infinite;

  @media (max-width: 768px) {       
      display: none;    
  }
`;