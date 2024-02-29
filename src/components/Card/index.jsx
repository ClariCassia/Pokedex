import { Card, Span } from './style'
import { useTheme } from '../../hooks/useTheme'


const CardPokemon = ({ pokemon, background, colorslabel, theme }) => { 
  
  
  
    return (
        <Card background={background} shadow={theme}>
            <Span colorslabel={colorslabel}># {pokemon.order}</Span>

            <div>
                <img src={pokemon.imagem} alt={pokemon.nome} />
                <h2>{pokemon.nome.charAt(0).toUpperCase() + pokemon.nome.slice(1)}</h2>
            </div>

        </Card>
    )
}

export default CardPokemon



