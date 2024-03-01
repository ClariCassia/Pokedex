import React from "react";
import { ContainerCard, typeColors, colorsLabel } from './style';
import CardPokemon from "../../components/Card";
import { useTheme } from "../../hooks/useTheme";
import usePokemonList from "../../hooks/usePokemonList";

const Home = () => {

  const { theme } = useTheme();
  const { pokemons, loading, error } = usePokemonList();

  const getTypeColor = (type) => typeColors[type] || typeColors.normal;
  const getTypeColorLabel = (type) => colorsLabel[type] || colorsLabel.normal;

  const renderPokemons = () => {
    return pokemons.map((pokemon, index) => (

      <CardPokemon
        key={index}
        pokemon={pokemon}
        colorsLabel={getTypeColorLabel(pokemon.type)}
        background={getTypeColor(pokemon.type)}
        theme={theme}
      />

    ));

  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro ao carregar os Pokémons: {error.message}</div>;
  }

  return <ContainerCard>{renderPokemons()}</ContainerCard>;
  
};

export default Home;
