import { HeaderContainer, LogoContainer } from "./styles"
import  LogoPokemon  from "../LogoPokemon"
import  LogoPokebola  from "../LogoPokebola"
import TogglerTheme from '../TogglerTheme'

 const Header = () => {

    return (
        <>
            <HeaderContainer>

                <TogglerTheme/>

                <LogoContainer>
                    <LogoPokemon/>
                    <LogoPokebola/>
                </LogoContainer>

            </HeaderContainer></>

    )
}

export default Header