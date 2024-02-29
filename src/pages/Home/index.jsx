import { useState, useEffect } from "react"
import { ContainerCard, typeColors, colorsLabel } from './style'
import getPokemon from "../../services/getPokemons"
import CardPokemon from "../../components/Card"

const Home = () => {

    const [pokemons, setPokemons] = useState([])

    useEffect(() => {

        const getList = async () => {

            const updatedPokemons = await getPokemon()

            setPokemons(updatedPokemons)
        }
        getList()
    }, [])

    const getTypeColor = (type) => typeColors[type] || typeColors.normal;
    const getTypeColorLabel = (type) => colorsLabel[type] || colorsLabel.normal;

    return (

        <ContainerCard>
            {pokemons.map((pokemon, index) => (
                <CardPokemon key={index} pokemon={pokemon} colorslabel={getTypeColorLabel(pokemon.type)} color={getTypeColor(pokemon.type)} />
            ))}
        </ContainerCard>
    )
}


export default Home





