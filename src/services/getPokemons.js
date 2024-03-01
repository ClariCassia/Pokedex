import getListUrl from '../services/getUrlPokemon';

const fetchPokemonDetails = async () => {
    
    const urlPokemon = await getListUrl();
    console.log("🚀 ~ fetchPokemonDetails ~ urlPokemon:", urlPokemon)

    return urlPokemon.map((item) => ({
        nome: item.name,
        imagem: item.sprites?.other?.home?.front_default || '', 
        type: item.types[0]?.type?.name || '' ,
        order:item.order,
    }));
};

export default fetchPokemonDetails;



