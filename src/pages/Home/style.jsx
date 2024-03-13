import styled from "styled-components";
import { bounce } from "../../animations/bounce";


export const ContainerCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1024px;
  gap: 15px;
  padding: 22px 0 25px;

  @media (max-width: 1024px) and (min-width: 800px) {
    max-width: 500px;
    padding: 10px 0 20px;
  
  }

  @media (max-width: 768px) {
    padding: 10px;
    max-width: 600px;
  }

  @media (max-width: 568px) {
    max-width: 400px;
  }`;

export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


export const ContainerButton = styled.div`
display: flex;
align-items: center;

button{
    font-size: 20px;
    padding: 10px;
    background-color: transparent;     
    color: ${props => props.textColor === '#212121' ? '#004A94' : "white"};
    font-weight: bold;
    transition: transform 0.3s, color 0.3s;  
}

button:hover{  
    cursor: pointer;
    transform: scale(1.1);
}

img{
    width: 35px;
    animation: ${bounce} 3s infinite;    
}

`
export const ContainerFiltro = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;

  label {
    margin-right: 8px;
  }

  select {
    padding: 2px 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 13px;
    background-color: transparent;  
  }
`;
