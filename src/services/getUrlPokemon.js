import axios from 'axios';

const getListUrl = async () => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=10`);
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

export default getListUrl;
