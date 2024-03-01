import styled from "styled-components"

export const Card = styled.div`
box-shadow: ${props => props.shadow};
background: ${props => props.background};
display: flex;
flex-direction: column;
padding: 15px;
border-radius: 8px;             

div{    
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;  
    flex: 1;
}

img{
    width: 150px;
}

h2{   
    color: white;
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