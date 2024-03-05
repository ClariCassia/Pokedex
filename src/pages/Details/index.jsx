import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import createPokemonInfo from '../../services/getDetalisPokemon';
import PokemonDetails from '../../components/PokemonDetails';

const Details = () => {
  const [pokemonInfo, setPokemonInfo] = useState(null);
  
  const { nome } = useParams();

  useEffect(() => {
    const fetchPokemonInfo = async () => {
      const info = await createPokemonInfo(nome);
      setPokemonInfo(info);
    };

    fetchPokemonInfo();
  }, [nome]);

  return <PokemonDetails pokemonInfo={pokemonInfo} />;
};

export default Details;
