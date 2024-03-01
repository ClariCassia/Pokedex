import { useState, useEffect } from "react";
import getListUrl from "../services/getUrlPokemon";
import {mapPokemonData} from '../services/getPokemons'

const usePokemonData = () => {
  
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [dadosCarregados, setDadosCarregados] = useState(false);

  useEffect(() => {

    const fetchData = async () => {

      try {

        const pokemonData = await getListUrl(offset);

        const novosPokemons = mapPokemonData(pokemonData);        

        setPokemons(novosPokemons);

        setDadosCarregados(true);
        
      } catch (error) {
        console.error('Erro ao buscar pokemons:', error);
      }
    };

    if (!dadosCarregados) {
      fetchData();
    }
  }, [offset, dadosCarregados]);

  const carregarMaisPokemons = async () => {

    const novoOffset = offset + 10;

    try {
      const pokemonData = await getListUrl(novoOffset);

      const novosPokemons = mapPokemonData(pokemonData);

      setPokemons((prevPokemons) => [...prevPokemons, ...novosPokemons]);

      setOffset(novoOffset);

    } catch (error) {

      console.error('Erro ao carregar mais pokemons:', error);
    }
  };  

  return { pokemons, carregarMaisPokemons };
};

export default usePokemonData;
