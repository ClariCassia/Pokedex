import getListUrl from '../services/getUrlPokemon';

const fetchPokemonDetails = async () => {
    
    const urlPokemon = await getListUrl();

    return urlPokemon.map((item) => ({
        nome: item.name,
        imagem: item.sprites?.other?.home?.front_default || '', 
        type: item.types[0]?.type?.name || '' 
    }));
};

export default fetchPokemonDetails;



