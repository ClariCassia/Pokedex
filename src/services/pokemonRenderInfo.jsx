import { firstLetterUppercase } from "./firstLetterUppercase";
import { getTypeImage } from './getTypeImage';
import styled from "styled-components";


export const renderEvolutionLine = (evolutionLine) => (
  <EvolutionLine>
    <span>Evolution Line:</span>
    {evolutionLine.map((pokemon, index) => (
      <li key={index}>{firstLetterUppercase(pokemon)}</li>
    ))}
  </EvolutionLine>
);


export const renderTypeSymbols = (types) => (
  <Div>
    <span>Type:</span>
    {types.map(type => (
      <ImageSimbol key={type} src={getTypeImage(type)} alt={type} title={type} />
    ))}
  </Div>
);

export const renderHeigthAndWeight = (height, pokemonWeight) => (
  <>
    <span>Height:</span>
    <p>{height < 1 ? `${height} cm` : `${height} metro(s)`}</p>
    <span>Weight:</span>
    <p>{pokemonWeight} kg</p>
  </>
);

export const renderWeaknesses = (weaknesses) => (
  <>
    <span>Weaknesses:</span>
    {weaknesses.map(type => (
      <ImageSimbol key={type} src={getTypeImage(type)} alt={type} title={type} />
    ))}
  </>
);

export const renderGender = (gender,malePercentage,femalePercentage) => ( 

  <>
    {gender === 'Genderless' ? (
      <p>Sem especificação de gênero</p>
    ) : (
      <ProgressBarContainer>
        <p>Masculino:</p>
        <ProgressBar color="#105be7b5" width={malePercentage}>
          {malePercentage}%
        </ProgressBar>
        <p>Feminino:</p>
        <ProgressBar color="#ff0783" width={femalePercentage}>
          {femalePercentage}%
        </ProgressBar>
      </ProgressBarContainer>
    )}
  </>
);

export const renderMoves = (moves, showAllMoves, toggleShowMoves) => (
  <div>
    {showAllMoves
      ? moves.map(move => <MoveItem key={move} move={move} />)
      : moves.slice(0, 5).map(move => <MoveItem key={move} move={move} />)}
    {moves.length > 5 && (
      <a onClick={toggleShowMoves}>
        {showAllMoves ? " ocultar " : "   mostrar mais"}
      </a>
    )}
  </div>
);

const MoveItem = ({ move }) => {
  return <StyledMove>{firstLetterUppercase(move)}</StyledMove>;
};

export const ImageSimbol = styled.img`
 width:20px;
`;
export const EvolutionLine = styled.ul`
 font-size: 15px;
`;
export const Div = styled.div`
  display: flex;
  gap: 10px;
`;

export const ProgressBarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  width: 100%;
`;

export const ProgressBar = styled.div` 
  border-radius: 10px;
  background-color: ${(props) => props.color};
  min-width: 10%;
  width: ${(props) => props.width}%;
  text-align: center;
  color: white;
  font-weight: bold;
  position: relative;
  overflow: hidden;
  padding:  4px 2px;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
`;

export const StyledMove = styled.div`
  border: 1px solid #ccc;
  padding: 4px 5px;
  margin: 5px;  
  display: inline-block; 
  font-size: 12px;
`;
