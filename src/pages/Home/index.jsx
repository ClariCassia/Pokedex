import React from "react";
import { ContainerHome, ContainerCard, ContainerButton } from './style';
import { Filter } from "../../components/Filter";
import { useTheme } from "../../hooks/useTheme";
import usePokemonData from "../../hooks/usePokemonData ";
import CardPokemon from "../../components/Card";
import { Button } from "../../components/Button";
import { getTypeColor, getTypeColorLabel } from '../../services/getTypeColors';
import { typeImages } from '../../services/getTypeSimbol';
import LogoPokebola from '../../components/LogoPokebola';

const Home = () => {

  const { pokemonsFiltered, loadMorePokemons, selectType } = usePokemonData();
  const { theme } = useTheme();
  const textColor = theme.color === '#212121' ? '#004A94' : 'white';

  const handleTypeClick = (tipo) => {
    selectType(tipo);
  };

  const getTypeImage = (type) => {
    return typeImages[type] || 'https://neonet.id/assets/images/slider/default.jpg';
  };

  return (
    <ContainerHome>

      <Filter handleTypeClick={handleTypeClick} />

      <ContainerCard>

        {pokemonsFiltered.map((pokemon, index) => (
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
          onClick={loadMorePokemons}
        />
        <LogoPokebola />
      </ContainerButton>

    </ContainerHome>

  );
};

export default Home;
