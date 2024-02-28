import { HeaderContainer, LogoContainer } from "./styles"
import { LogoPokemon } from "../LogoPokemon/index"
import {LogoPokebola} from "../LogoPokebola/index"


export const Header = () => {
    return (
        <HeaderContainer>
            <LogoContainer>
                <LogoPokemon></LogoPokemon>
                <LogoPokebola></LogoPokebola>
            </LogoContainer>
        </HeaderContainer>
    )
}