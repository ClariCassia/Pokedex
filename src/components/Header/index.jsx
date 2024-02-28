import { HeaderContainer, LogoContainer } from "./styles"
import { LogoPokemon } from "../LogoPokemon/index"
import { LogoPokebola } from "../LogoPokebola/index"
import Toggler from "../Toggler"

export const Header = () => {

    return (
        <>
            <HeaderContainer>
                <div> <Toggler></Toggler></div>
                <LogoContainer>
                    <LogoPokemon></LogoPokemon>
                    <LogoPokebola></LogoPokebola>
                </LogoContainer>

            </HeaderContainer></>


    )
}