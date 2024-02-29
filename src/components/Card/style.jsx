import styled from "styled-components"

export const Card = styled.div`
background-color: ${props => props.color};
display: flex;
flex-direction: column;
padding: 15px;
border-radius: 8px;
box-shadow:  7px 7px 5px #22212150;
             

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
    font-family: 'SF Fedora', sans-serif;
    color: white;
}

`

export const Span = styled.span`
    background-color: ${props => props.colorslabel};
    margin-top: 0; 
    font-size: 18px;
    color: white;
    font-weight: bold;
    width: 30%;
    padding: 2px;
    text-align: center;
    border-radius: 5px;
`