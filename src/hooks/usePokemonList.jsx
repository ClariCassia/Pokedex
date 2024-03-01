import { useState, useEffect } from "react";
import getPokemon from "../services/getPokemons";

const usePokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchPokemonList = async () => {

      try {

        const updatedPokemons = await getPokemon();
        setPokemons(updatedPokemons);
        setLoading(false);

      } catch (error) {

        setError(error);
        setLoading(false);

      }

    };

    fetchPokemonList();

  }, []);

  return { pokemons, loading, error };
  
};

export default usePokemonList;
