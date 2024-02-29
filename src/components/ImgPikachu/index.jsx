import ImgPikachu from '../../assets/pikachu.gif'
import styled from "styled-components"


export const  Pikachu = () =>{
    return (
        <Img src={ImgPikachu} alt="" />
       )

}

const Img = styled.img`
width: 250px;

`