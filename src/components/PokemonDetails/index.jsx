import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { firstLetterUppercase } from '../../services/firstLetterUppercase';
import { getTypeColor, getTypeColorLabel } from '../../services/getTypeColors';
import { ButtoArrow } from '../ButtoArrow';
import {
  Container,
  ImagePokemon,
  ContainerDescription,
  InfoSection,
  InfoLabel,
  StatsContainer,
  Abilitys,
} from './styles';

import { renderEvolutionLine, renderTypeSymbols, renderHeigthAndWeight, renderWeaknesses, renderGender, renderMoves } from '../../services/pokemonRenderInfo';

const PokemonDetails = ({ pokemonInfo }) => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [showAllMoves, setShowAllMoves] = useState(false);

  const toggleShowMoves = () => {
    setShowAllMoves(!showAllMoves);
  };

  if (!pokemonInfo) {
    return <div>Loading...</div>;
  }

  const {
    gender,
    types,
    height,
    pokemonWeight,
    abilities,
    weaknesses,
    evolutionLine,
    name,
    image,
    moves
  } = pokemonInfo;

  const [malePercentage, femalePercentage] = gender !== 'Genderless' ? pokemonInfo.gender.split(', ').map(genderStr => parseFloat(genderStr.match(/\d+/)[0])) : [0, 0];

  return (
    <Container>

      <ButtoArrow theme={theme} navegation={navigate}></ButtoArrow>

      <ImagePokemon src={image} alt="Imagem Pokemon" />

      <ContainerDescription background={getTypeColor(types[0])} color={getTypeColorLabel(types[0])}>

        <h2>{name ? firstLetterUppercase(name) : "Nome indisponivel"}</h2>

        <InfoLabel background={getTypeColor(types[0])} color={getTypeColorLabel(types[0])}>Características</InfoLabel>

        <InfoSection>
          {renderEvolutionLine(evolutionLine)}
          {renderTypeSymbols(types)}
        </InfoSection>

        <StatsContainer>
          {renderHeigthAndWeight(height, pokemonWeight)}
          {renderWeaknesses(weaknesses)}
        </StatsContainer>

        <InfoLabel background={getTypeColor(types[0])} color={getTypeColorLabel(types[0])}>Gender:</InfoLabel>

        <StatsContainer>
          {renderGender(gender, malePercentage, femalePercentage)}
        </StatsContainer>

        <InfoLabel background={getTypeColor(types[0])} color={getTypeColorLabel(types[0])}>Abilities:</InfoLabel>

        <Abilitys>{abilities.map(ability => firstLetterUppercase(`${ability.name}: ${ability.description}`)).join(", ")}</Abilitys>

        <InfoLabel background={getTypeColor(types[0])} color={getTypeColorLabel(types[0])}>Moves:</InfoLabel>

        {renderMoves(moves, showAllMoves, toggleShowMoves)}

      </ContainerDescription>
    </Container>
  );
};

export default PokemonDetails;