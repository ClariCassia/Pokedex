import React from "react";

import { ContainerCard, ContainerHome, ContainerButton } from './style';
import { Filtro } from "../../components/Filtro";
import { useTheme } from "../../hooks/useTheme";
import usePokemonData from "../../hooks/usePokemonData ";
import CardPokemon from "../../components/Card";
import { Button } from "../../components/Button";
import { getTypeColor, getTypeColorLabel } from '../../services/getTypeColors';

import LogoPokebola from '../../components/LogoPokebola';

const Home = () => {

  const { pokemonsFiltrados, carregarMaisPokemons, selecionarTipo } = usePokemonData();
  const { theme } = useTheme();
  const textColor = theme.color === '#212121' ? '#004A94' : 'white';

  const handleTipoClick = (tipo) => {
    selecionarTipo(tipo);
  };

  return (
    <ContainerHome >

      <Filtro handleTipoClick={handleTipoClick} />

      <ContainerCard>
        {pokemonsFiltrados.map((pokemon, index) => (

          <CardPokemon
            key={index}
            pokemon={pokemon}
            colorsLabel={getTypeColorLabel(pokemon.type)}
            background={getTypeColor(pokemon.type)}
            theme={theme}
          />
        )
        )}
      </ContainerCard>
      <ContainerButton>
        <Button
          label="Mostrar Mais"
          textColor={textColor}
          onClick={carregarMaisPokemons}
        />
        <LogoPokebola />
      </ContainerButton>
    </ContainerHome>
  );
};

export default Home;
