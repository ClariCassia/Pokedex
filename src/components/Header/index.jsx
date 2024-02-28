import { HeaderContainer, LogoContainer } from "./styles"
import { LogoPokemon } from "../LogoPokemon/index"
import { LogoPokebola } from "../LogoPokebola/index"
import TogglerTheme from '../TogglerTheme/index'

export const Header = () => {

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