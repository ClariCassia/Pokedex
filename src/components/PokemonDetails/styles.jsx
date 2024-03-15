import styled from 'styled-components';

export const Container = styled.div`
display: flex;
padding: 30px;
color: black;

@media (max-width: 1024px) {
  flex-direction: column;
  padding: 30px;
  align-items:center;
  justify-content: center;
 }

@media (max-width: 768px) {
  font-size: 12px;    
}
`;

export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 550px;
  gap: 20px;
  padding: 20px;
  box-shadow: ${props => props.theme.boxShadow};
  background-color: ${props => props.background};  

  h2 {
    font-size: 40px;
    color: aliceblue;
    background-color: ${props => props.color};
    padding: 10px;
    width: 100%;
    text-align: center;
    border-radius: 5px;
  }

  span {
    font-weight: bold;
    font-size: 14px;
  }

  ul {
    display: flex;
   gap: 15px;
    list-style: none;  }

      a{
        font-size: 12px;
        transition: font-size 0.5s;   
      }

      a:hover{
        font-weight: bold;
        font-size: 14px;
        cursor: pointer;
      }

  @media (max-width: 768px) {    
    span { 
    font-size: 16px;
  }   
  }
`;


export const BackButton = styled.button`
  display: flex;
  background-color: transparent;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    opacity: 0.5;
  }
`;

export const InfoSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  

  p{
    font-size: 13px;
    
  }
`;

export const ImagePokemon = styled.img`
  max-height: 550px;

  @media (max-width: 1024px) {  
    width: 350px;    
  }
`;

export const InfoLabel = styled.p`
    background-color: ${props => props.color};
    padding: 5px 15px;
    color: black; 
    font-weight :bold ;
    border-radius: 15px 2px;
    color: aliceblue;

`;
export const StatsContainer = styled.div` 
  display: flex;
  align-items: center;
 

  justify-content: space-between;
  flex-wrap: wrap;
`;
export const Abilitys = styled.p` 
  font-size: 14px;
`;


