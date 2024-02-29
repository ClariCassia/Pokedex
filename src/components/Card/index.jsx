import styled from "styled-components"


const CardPokemon = ({ pokemon }) => {
    return (
        <Card>
            <span># {pokemon.order}</span>

            <div>
                <img src={pokemon.imagem} alt={pokemon.nome} />
                <h2>{pokemon.nome}</h2>
            </div>

        </Card>
    )
}

export default CardPokemon

const Card = styled.div`
background-color: yellow;
display: flex;
flex-direction: column;
align-items: start;
justify-content: space-between;
padding: 15px;
min-height: 300px;



span{
    /* background-color: red; */
    margin-top: 0; 
    font-size: 18px;
    color: white;
    font-weight: bold;
}

div{
    
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* background-color:pink;  */
    gap: 25px;  
    flex: 1;
}




img{
    width: 150px;
}


`

