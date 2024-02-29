import { Card, Span } from './style'

const CardPokemon = ({ pokemon, color, colorslabel }) => {
    return (
        <Card color={color} >
            <Span colorslabel={colorslabel}># {pokemon.order}</Span>

            <div>
                <img src={pokemon.imagem} alt={pokemon.nome} />
                <h2>{pokemon.nome.charAt(0).toUpperCase() + pokemon.nome.slice(1)}</h2>
            </div>

        </Card>
    )
}

export default CardPokemon



