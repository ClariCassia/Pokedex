
import { Card, Span } from './style'

const CardPokemon = ({ pokemon: { order, imagem, nome }, background, colorsLabel, theme }) => {

    return (
        <Card background={background} shadow={theme}>
            <Span colorslabel={colorsLabel}># {order}</Span>

            <div>
                <img src={imagem} alt={nome} />
                <h2>{`${nome.charAt(0).toUpperCase()}${nome.slice(1)}`}</h2>

            </div>

        </Card>
    )
}

export default CardPokemon



