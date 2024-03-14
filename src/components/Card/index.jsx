import { Card, Span, PokemonImg,ImgSymbol } from './style'
import { Link } from 'react-router-dom';
import {firstLetterUppercase} from '../../services/firstLetterUppercase'
const CardPokemon = ({ pokemon: { order, image, name}, background, colorsLabel, theme ,img}) => {
  
    return (
        <Link to={`/Details/${name}`} style={{ textDecoration: 'none' }}>
            <Card background={background} shadow={theme}>

                <Span colorslabel={colorsLabel}># {order}</Span>
                <ImgSymbol src={img} alt="" />

                <div>
                    <PokemonImg src={image} alt={name} />
                    <h2>{firstLetterUppercase(name)}</h2>
                </div>

            </Card>
        </Link>
    )
}

export default CardPokemon



