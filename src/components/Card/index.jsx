
import { Card, Span } from './style'
import { Link } from 'react-router-dom';

const CardPokemon = ({ pokemon: { order, imagem, nome }, background, colorsLabel, theme }) => {

  
    return (
        <Link to={`/Details/${nome}`} style={{ textDecoration: 'none' }}>
            <Card background={background} shadow={theme}>

                <Span colorslabel={colorsLabel}># {order}</Span>

                <div>
                    <img src={imagem} alt={nome} />
                    <h2>{`${nome.charAt(0).toUpperCase()}${nome.slice(1)}`}</h2>
                </div>

            </Card>
        </Link>
    )
}

export default CardPokemon



