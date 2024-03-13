import React from "react";
import { ContainerHome, ContainerCard, ContainerButton } from './style';
import { Filtro } from "../../components/Filtro";
import { useTheme } from "../../hooks/useTheme";
import usePokemonData from "../../hooks/usePokemonData ";
import CardPokemon from "../../components/Card";
import { Button } from "../../components/Button";
import { getTypeColor, getTypeColorLabel } from '../../services/getTypeColors';
import { typeImages } from '../../services/getTypeSimbol';
import LogoPokebola from '../../components/LogoPokebola';

const Home = () => {
  const { pokemonsFiltrados, carregarMaisPokemons, selecionarTipo } = usePokemonData();
  const { theme } = useTheme();
  const textColor = theme.color === '#212121' ? '#004A94' : 'white';

  const handleTipoClick = (tipo) => {
    selecionarTipo(tipo);
  };

  const getTypeImage = (type) => {
    return typeImages[type] || 'url_da_imagem_default.png';
  };

  return (
    <ContainerHome>
      <Filtro handleTipoClick={handleTipoClick} />

      <ContainerCard>
        {pokemonsFiltrados.map((pokemon, index) => (
          <CardPokemon
            key={index}
            pokemon={pokemon}
            colorsLabel={getTypeColorLabel(pokemon.type)}
            background={getTypeColor(pokemon.type)}
            theme={theme}
          >
            <img src={getTypeImage(pokemon.type)} alt={pokemon.type} />
          </CardPokemon>
        ))}
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
