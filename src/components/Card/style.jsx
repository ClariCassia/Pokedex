import styled from "styled-components"

export const Card = styled.div`
box-shadow: ${props => props.shadow};
background: ${props => props.background};
display: flex;
flex-direction: column;
padding: 15px;
border-radius: 8px;   
transition: transform 0.3s ease, box-shadow 0.3s ease;          

div{    
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;  
    flex: 1;
}

h2{   
    color: white;
    
}
&:hover {
    transform: scale(1.05); 
    z-index: 2; 
  }
`

export const Span = styled.span`
    background-color: ${props => props.colorslabel};
    margin-top: 0; 
    font-size: 18px;
    color: white;  
    width: 30%;
    padding: 2px;
    text-align: center;
    border-radius: 5px;
`
export const PokemonImg = styled.img`
width: 150px;  
`
export const ImgSymbol = styled.img`
width: 30px;  
`