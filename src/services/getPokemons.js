import getListUrl from '../services/getUrlPokemon'

const getPokemon = async () => {

    const urlPokemon = await getListUrl();

     return urlPokemon.map((item) => ({
        nome: item.name,
        imagem: item.sprites.other.home.front_default,
        order: item.order,
        type: item.types[0].type.name
    }));

 
}


export default getPokemon



