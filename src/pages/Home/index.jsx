import { useState, useEffect } from "react"
import styled from "styled-components"
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

    return (

        <ContainerCard>
            {pokemons.map((pokemon, index) => (
                <CardPokemon key={index} pokemon={pokemon} />
            ))}
        </ContainerCard>
    )
}


export default Home


const ContainerCard = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
min-height: calc(100vh - 190px);
/* background-color:blue; */
max-width: 1024px;
gap: 0 15px;

`