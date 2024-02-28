import { HeaderContainer, LogoContainer } from "./styles"
import { LogoPokemon } from "../LogoPokemon/index"

export const Header = () => {
    return (
        <HeaderContainer>
            <LogoContainer>
                <LogoPokemon></LogoPokemon>
            </LogoContainer>
        </HeaderContainer>
    )
}