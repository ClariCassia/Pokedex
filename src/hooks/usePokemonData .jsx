import { useState, useEffect } from "react";
import { getListUrl, getLisFilter } from "../services/getUrlPokemon";
import { mapPokemonData } from '../services/getPokemons'

const usePokemonData = () => {

  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [dadosCarregados, setDadosCarregados] = useState(false);
  const [tipoSelecionado, setTipoSelecionado] = useState('');
  const [pokemonsFiltrados, setPokemonsFiltrados] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pokemonData = await getListUrl(offset);
        const novosPokemons = mapPokemonData(pokemonData);
        setPokemons(novosPokemons);
        setPokemonsFiltrados(novosPokemons);
        setDadosCarregados(true);
      } catch (error) {
        console.error('Erro ao buscar pokemons:', error);
      }
    };

    if (!dadosCarregados) {
      fetchData();
    }
  }, [offset, dadosCarregados]);


  const selecionarTipo = (type) => {
    setTipoSelecionado(type);

  };

  useEffect(() => {


    if (tipoSelecionado === '') {
      setPokemonsFiltrados(pokemons);
    } else {
      const fetchData = async () => {

        try {

          const pokemonData = await getLisFilter(tipoSelecionado);
          const novosPokemons = mapPokemonData(pokemonData);


          setPokemonsFiltrados(novosPokemons);
          setDadosCarregados(true);

        } catch (error) {
          console.error('Erro ao buscar pokemons:', error);
        }
      };

      fetchData();

    }

  }, [tipoSelecionado]);

  const carregarMaisPokemons = async () => {
    const novoOffset = offset + 10;

    try {

      const pokemonData = await getListUrl(novoOffset);

      const novosPokemons = mapPokemonData(pokemonData);

      setPokemons((prevPokemons) => [...prevPokemons, ...novosPokemons]);

      setOffset(novoOffset);

      if (tipoSelecionado === '') {

        setPokemonsFiltrados((prevPokemonsFiltrados) => [...prevPokemonsFiltrados, ...novosPokemons]);

      } else {

        const pokemonData = await getLisFilter(tipoSelecionado, novoOffset);

        const novosPokemons = mapPokemonData(pokemonData);
        console.log("🚀 ~ carregarMaisPokemons ~ novosPokemons:", novosPokemons)

        setPokemonsFiltrados(() => [ ...novosPokemons]);

      }
    } catch (error) {
      console.error('Erro ao carregar mais pokemons:', error);
    }
  };


  return { pokemonsFiltrados, carregarMaisPokemons, selecionarTipo };
};

export default usePokemonData;