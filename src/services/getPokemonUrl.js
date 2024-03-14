import axios from 'axios';

export const getPokemonUrl = async (offset ) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${offset}`);
        const { results } = response.data;    

        const urlPokemon = results.map((result) => result.url);

        const pokemonData = await Promise.all(
            urlPokemon.map((url) => axios.get(url).then((response) => response.data))
        );

        return pokemonData;
    } catch (error) {
        console.error('Erro ao obter lista de URLs de Pokémon:', error);
        return []; 
    }
}; 

