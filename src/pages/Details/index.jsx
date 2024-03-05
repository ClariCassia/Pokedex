import { useParams } from 'react-router-dom';

import getDetalisPokemon from '../../services/getDetalisPokemon';


const Details = () =>{

    const { nome } = useParams();
    console.log("🚀 ~ Details ~ nome:", nome)

    return(
         <div>
      <h1>Detalhes do Pokémon: {nome}</h1>
      
    </div>
    )
}


export default Details