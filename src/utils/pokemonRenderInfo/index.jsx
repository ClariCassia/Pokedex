import { firstLetterUppercase } from "../../services/firstLetterUppercase";
import { getTypeImage } from '../../services/getTypeImage';
import {
  ImageSimbol,
  EvolutionLine,
  Div,
  ProgressBarContainer,
  ProgressBar,
  StyledMove
} from "./style";


export const renderEvolutionLine = (evolutionLine) => {

  const fontSize = evolutionLine.length > 5 ? '13px' : '16px';

  return (
    <EvolutionLine fontSize={fontSize}>
      <span>Linha de Evolução: </span>
      <div>
        {evolutionLine.map((pokemon, index) => (
          <li key={index}>{firstLetterUppercase(pokemon)}</li>
        ))}
      </div>
    </EvolutionLine>
  );
};

export const renderTypeSymbols = (types) => (
  <Div>
    <span>Tipo:</span>
    {types.map(type => (
      <ImageSimbol key={type} src={getTypeImage(type)} alt={type} title={type} />
    ))}
  </Div>
);

export const renderHeigthAndWeight = (height, pokemonWeight) => (
  <>
    <span>Altura:</span>
    <p>{height < 1 ? `${height} cm` : `${height} metro(s)`}</p>
    <span>Peso:</span>
    <p>{pokemonWeight} kg</p>
  </>
);

export const renderWeaknesses = (weaknesses) => (

  <>

    <span>Fraquezas:</span>
    {weaknesses.map(type => (
      <ImageSimbol key={type} src={getTypeImage(type)} alt={type} title={type} />
    ))}
  </>
);

export const renderGender = (gender, malePercentage, femalePercentage) => (

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
        <ProgressBar color="#EC407A" width={femalePercentage}>
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
    {moves.length > 3 && (
      <a onClick={toggleShowMoves}>
        {showAllMoves ? " ocultar " : "   mostrar mais"}
      </a>
    )}
  </div>
);

const MoveItem = ({ move }) => {
  return <StyledMove>{firstLetterUppercase(move)}</StyledMove>;
};

