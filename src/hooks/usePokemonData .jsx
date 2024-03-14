import { useState, useEffect } from "react";
import { getPokemonUrl } from "../services/getPokemonUrl";
import { getFilteredPokemon } from "../services/getPokemonsFiltered";
import { mapPokemonData } from '../services/getDataPokemons'
const usePokemonData = () => {

  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [typeSelected, setTypeSelected] = useState('');
  const [pokemonsFiltered, setPokemonsFiltered] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pokemonData = await getPokemonUrl(offset);
        const newPokemon = mapPokemonData(pokemonData);
        setPokemons(newPokemon);
        setPokemonsFiltered(newPokemon);
        setDataLoaded(true);
      } catch (error) {
        console.error('Erro ao buscar pokemons:', error);
      }
    };

    if (!
      dataLoaded) {
      fetchData();
    }
  }, [offset,
    dataLoaded]);

  const selectType = (type) => {
    setTypeSelected(type);
  };

  useEffect(() => {


    if (typeSelected === '') {
      setPokemonsFiltered(pokemons);
    } else {
      const fetchData = async () => {

        try {

          const pokemonData = await getFilteredPokemon(typeSelected);
          const newPokemon = mapPokemonData(pokemonData);

          setPokemonsFiltered(newPokemon);
          setDataLoaded(true);

        } catch (error) {
          console.error('Erro ao buscar pokemons:', error);
        }
      };

      fetchData();
    }

  }, [typeSelected]);

  const loadMorePokemons = async () => {

    const newOffset = offset + 10;

    try {

      const pokemonData = await getPokemonUrl(newOffset);

      const newPokemon = mapPokemonData(pokemonData);

      setPokemons((prevPokemons) => [...prevPokemons, ...newPokemon]);

      setOffset(newOffset);

      if (typeSelected === '') {

        setPokemonsFiltered((prevPokemonsFiltered) => [...prevPokemonsFiltered, ...newPokemon]);

      } else {

        const pokemonData = await getFilteredPokemon(typeSelected, newOffset);

        const newPokemon = mapPokemonData(pokemonData);       

        setPokemonsFiltered(() => [...newPokemon]);

      }
    } catch (error) {
      console.error('Erro ao carregar mais pokemons:', error);
    }
  };

  return { pokemonsFiltered, loadMorePokemons, selectType };
};

export default usePokemonData;