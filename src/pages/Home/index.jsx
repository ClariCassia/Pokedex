import React from "react";
import { ContainerCard,typeColors,colorsLabel } from './style';
import { useTheme } from "../../hooks/useTheme";

import usePokemonData from "../../hooks/usePokemonData ";
import CardPokemon from "../../components/Card";

const Home = () => {

  const { pokemons, carregarMaisPokemons } = usePokemonData();
  
  const { theme } = useTheme();

   const getTypeColor = (type) => typeColors[type] || typeColors.normal;
   const getTypeColorLabel = (type) => colorsLabel[type] || colorsLabel.normal;

  return (
    <div>   
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
      <button onClick={carregarMaisPokemons}>Carregar mais pokemons</button>
    </div>
  );
};

export default Home;