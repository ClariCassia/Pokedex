import React from "react";
import { ContainerCard,  ContainerHome, ContainerButton } from './style';
import { useTheme } from "../../hooks/useTheme";
import usePokemonData from "../../hooks/usePokemonData ";
import CardPokemon from "../../components/Card";
import { Button } from "../../components/Button";
import {getTypeColor,getTypeColorLabel} from '../../services/getTypeColors'

import LogoPokebola from '../../components/LogoPokebola'

const Home = () => {

  const { pokemons, carregarMaisPokemons } = usePokemonData();


  const { theme } = useTheme();

  
  const textColor = theme.color === '#212121' ? '#004A94' : 'white';

  return (
    <ContainerHome>
      <ContainerCard>
        {pokemons.map((pokemon, index) => (
          <CardPokemon
            key={index}
            pokemon={pokemon}
            colorsLabel={getTypeColorLabel(pokemon.type)}
            background={getTypeColor(pokemon.type)}
            theme={theme}
          />
        ))}
      </ContainerCard>
      <ContainerButton>
        <Button
          label="Mostrar Mais"      
         textColor={textColor}
          onClick={carregarMaisPokemons}
        />



        <LogoPokebola></LogoPokebola>
      </ContainerButton>
    </ContainerHome>);
};

export default Home;

