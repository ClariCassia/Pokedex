import axios from 'axios'

const getListUrl = async () => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=10&offset=10`)

    const { results } = response.data

    let urlPokemon = results.map((result) => result.url)

    return await Promise.all(
        urlPokemon.map((url) => axios.get(url)
            .then((response) => response.data))
    )
}


export default getListUrl