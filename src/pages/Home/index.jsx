import React from "react";
import { ContainerCard,typeColors,colorsLabel, ContainerHome } from './style';
import { useTheme } from "../../hooks/useTheme";
import usePokemonData from "../../hooks/usePokemonData ";
import CardPokemon from "../../components/Card";
import { Button } from "../../components/Button";

const Home = () => {

  const { pokemons, carregarMaisPokemons } = usePokemonData();
  
  const { theme } = useTheme();

   const getTypeColor = (type) => typeColors[type] || typeColors.normal;
   const getTypeColorLabel = (type) => colorsLabel[type] || colorsLabel.normal;

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
      <Button  label='Carregar Mais' onClick={carregarMaisPokemons} className="StickyButton"></Button>
      
    </ContainerHome>  );
};

export default Home;
