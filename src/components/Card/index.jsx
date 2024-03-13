
import { Card, Span } from './style'
import { Link } from 'react-router-dom';
import {firstLetterUppercase} from '../../services/firstLetterUppercase'

const CardPokemon = ({ pokemon: { order, imagem, nome }, background, colorsLabel, theme }) => {

  
    return (
        <Link to={`/Details/${nome}`} style={{ textDecoration: 'none' }}>
            <Card background={background} shadow={theme}>

                <Span colorslabel={colorsLabel}># {order}</Span>

                <div>
                    <img src={imagem} alt={nome} />
                    <h2>{firstLetterUppercase(nome)}</h2>
                </div>

            </Card>
        </Link>
    )
}

export default CardPokemon



