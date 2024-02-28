import { HeaderContainer, LogoContainer } from "./styles"
import { LogoPokemon } from "../LogoPokemon/index"
import { LogoPokebola } from "../LogoPokebola/index"
import { Toggler } from "../Toggler"

export const Header = () => {
    return (
        <HeaderContainer>

            <Toggler></Toggler>

            <LogoContainer>
                <LogoPokemon></LogoPokemon>
                <LogoPokebola></LogoPokebola>
            </LogoContainer>

        </HeaderContainer>
    )
}