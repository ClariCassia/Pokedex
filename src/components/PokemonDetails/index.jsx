import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, ContainerDescription, ProgressBarContainer, ProgressBar, BackButton, Div, } from './styles';

import { useTheme } from '../../hooks/useTheme';
import { firstLetterUppercase } from '../../services/firstLetterUppercase';
import { getTypeColor, getTypeColorLabel } from '../../services/getTypeColors';
import { StyledArrowLeft } from './styles';
import { useState } from 'react';

const PokemonDetails = ({ pokemonInfo }) => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  const [showAllMoves, setShowAllMoves] = useState(false);

  const handleShowMoves = () => {
    setShowAllMoves(!showAllMoves);
  };

  if (!pokemonInfo) {
    return <div>Loading...</div>;
  }

  const { gender, types, eggGroups, height, pokemonWeight, abilities, weaknesses, evolutionLine, nome, imagem, moves } = pokemonInfo;

  const [malePercentage, femalePercentage] = gender !== 'Genderless' ? pokemonInfo.gender.split(', ').map(genderStr => parseFloat(genderStr.match(/\d+/)[0])) : [0, 0];

  return (
    <Container>
      <BackButton onClick={() => navigate(-1)}>
        <StyledArrowLeft theme={theme} />
      </BackButton>

      <img src={imagem} alt="Imagem Pokemon" />

      <ContainerDescription theme={theme} background={getTypeColor(types[0])} color={getTypeColorLabel(types[0])}>
        <h2>{firstLetterUppercase(nome)}</h2>

        <Div>
          <span>Egg Groups:</span>
          <p>{eggGroups.map(group => firstLetterUppercase(group)).join(", ")}</p>

          <span>Type:</span>
          <p>{types.map(type => firstLetterUppercase(type)).join(", ")}</p>
        </Div>

        <span>Gender:</span>
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

        <Div>
          <span>Height:</span>
          {height < 1 ? <p>{height} cm</p> : <p>{height} metro(s) </p>}

          <span> Weight:</span>
          <p>{pokemonWeight} kg</p>
        </Div>

        <span>Moves:</span>
        <p>
          {showAllMoves
            ? moves.map(move => firstLetterUppercase(move)).join(", ")
            : moves.slice(0, 3).map(move => firstLetterUppercase(move)).join(", ")}
          {moves.length > 3 && (
            <a onClick={handleShowMoves}>
              {showAllMoves ? " ocultar " : "  ... mostrar mais"}
            </a>
          )}
        </p>

        <span>Abilities:</span>
        <p>{abilities.map(ability => firstLetterUppercase(`${ability.name}: ${ability.description}`)).join(", ")}</p>

        <span>Weaknesses:</span>
        <p>{weaknesses.map(weakness => firstLetterUppercase(weakness)).join(", ")}</p>

        <span>Evolution Line:</span>
        <ul>
          {evolutionLine.map((pokemon, index) => (
            <li key={index}>{firstLetterUppercase(pokemon)}</li>
          ))}
        </ul>

      </ContainerDescription>
    </Container>
  );
};

export default PokemonDetails;