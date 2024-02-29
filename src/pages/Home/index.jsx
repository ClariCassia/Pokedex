import { useState, useEffect } from "react"
import { ContainerCard, typeColors, colorsLabel } from './style'
import getPokemon from "../../services/getPokemons"
import CardPokemon from "../../components/Card"
import { useTheme } from "../../hooks/useTheme"


const Home = () => {

    const [pokemons, setPokemons] = useState([])
    const {theme} = useTheme()

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
                <CardPokemon key={index} pokemon={pokemon} colorslabel={getTypeColorLabel(pokemon.type)} background={getTypeColor(pokemon.type)} theme={theme} />
            ))}
        </ContainerCard>
    )
}


export default Home





