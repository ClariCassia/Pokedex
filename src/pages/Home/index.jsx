import { useState, useEffect } from "react"
import getPokemon from "../../services/getPokemons"

const Home = () => {

    const [pokemons, setPokemons] = useState([])   

    useEffect(()=>{
        
        const getList = async () => {

            const updatedPokemons = await getPokemon()    
    
            setPokemons(updatedPokemons)    
        }    
        getList()
    },[])  



    return (

        <h1>Home</h1>

    )
}


export default Home