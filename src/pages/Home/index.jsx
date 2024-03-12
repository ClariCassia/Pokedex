import React from "react";
import { useState } from "react";
import { ContainerCard, ContainerHome, ContainerButton } from './style';
import { useTheme } from "../../hooks/useTheme";
import usePokemonData from "../../hooks/usePokemonData ";
import CardPokemon from "../../components/Card";
import { Button } from "../../components/Button";
import { getTypeColor, getTypeColorLabel } from '../../services/getTypeColors';

import LogoPokebola from '../../components/LogoPokebola';

const Home = () => {
  const [selectedType, setSelectedType] = useState('');
  const { pokemonsFiltrados, carregarMaisPokemons, selecionarTipo } = usePokemonData();
  const { theme } = useTheme();
  const textColor = theme.color === '#212121' ? '#004A94' : 'white';  

  const handleTipoClick = (tipo) => {
    selecionarTipo(tipo);
    setSelectedType(tipo);
  };

  return (
    <ContainerHome>
      <label htmlFor="type">Filtrar por tipo: </label>
      <select value={selectedType} onChange={(e) => handleTipoClick(e.target.value)}>
        <option value="">Todos os tipos</option>
        <option value="electric">Electric</option>
        <option value="grass">Grama</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>   

      </select>

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
