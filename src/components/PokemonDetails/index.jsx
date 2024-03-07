import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useTheme } from '../../hooks/useTheme';

const StyledArrowLeft = styled(FaArrowLeft)`
  color: #000; /* Cor do ícone */
  font-size: 30px; /* Tamanho do ícone */
`;

const PokemonDetails = ({ pokemonInfo }) => {
  console.log("🚀 ~ PokemonDetails ~ pokemonInfo:", pokemonInfo)
  const navigate = useNavigate();

  const { theme } = useTheme()

  const getTypeColor = (type) => typeColors[type] || typeColors.normal;
  const getTypeColorLabel = (type) => colorsLabel[type] || colorsLabel.normal;



  if (!pokemonInfo) {
    return <div>Loading...</div>;
  }

  if (!pokemonInfo.gender || !pokemonInfo.gender.includes('Male') || !pokemonInfo.gender.includes('Female')) {
    return <div>No gender information available</div>;
  }

  // Divide a string 'gender' em duas partes: Male e Female
  const [maleString, femaleString] = pokemonInfo.gender.split(', ');

  // Extrai os números da string usando expressão regular
  const malePercentage = parseFloat(maleString.match(/\d+/)[0]);
  const femalePercentage = parseFloat(femaleString.match(/\d+/)[0]);


  return (

    <>
      <Container>

        <div>
          <BackButton onClick={() => navigate(-1)}>
            <StyledArrowLeft />
          </BackButton>
          <img src={pokemonInfo.imagem} alt="" />
        </div>

        <ContainerDescription theme={theme} background={getTypeColor(pokemonInfo.types[0])} color={getTypeColorLabel(pokemonInfo.types[0])}>
          <h2>{pokemonInfo.nome.charAt(0).toUpperCase() + pokemonInfo.nome.slice(1)}</h2>
         
          <Teste>
            <span >Egg Groups:</span>
            <p>{pokemonInfo.eggGroups.join(", ")}</p>
            <span>Type:</span>
            <p> {pokemonInfo.types.join(", ")}</p>
          </Teste>
         
          <span>Gender:</span>
          <ProgressBarContainer>
            Masculino:
            <ProgressBar color="#105be7b5" width={malePercentage}>
              {malePercentage}%
            </ProgressBar>
            Feminino:
            <ProgressBar color="#ff0783" width={femalePercentage}>
              {femalePercentage}%
            </ProgressBar>
          </ProgressBarContainer>

          <Teste>
            <span>Height:</span>
            <p> {pokemonInfo.height} m</p>            
            <span> Weight:</span>
            <p> {pokemonInfo.pokemonWeight} kg</p>

          </Teste>

          <span>Abilities:</span>
          <p> {pokemonInfo.abilities.join(", ")}</p>
          <span>Weaknesses:</span>
          <p> {pokemonInfo.weaknesses.join(", ")}</p>

         

          <span>Evolution Line:</span>
          <ul>
            {pokemonInfo.evolutionLine.map((pokemon, index) => (
              <li key={index}>{pokemon}</li>
            ))}
          </ul>

        </ContainerDescription>

      </Container>
    </>
  );
};

export default PokemonDetails;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1180px;
  gap: 15px;
 


  @media (max-width: 768px) {
    font-size: 12px;
    flex-direction: column;
    padding: 20px;   
   
    img{
      width: 250px;
    }
  } 
  
`;

const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column; 
 
  gap: 20px;
  min-width: 500px;
  padding: 20px;
  box-shadow: ${props => props.theme.boxShadow};
  background-color: ${props => props.background};
  

  h2 {
    font-size: 40px;
    color: aliceblue;
    background-color: ${props => props.color};
    padding:10px;
    width:100%;
    text-align:center;
    border-radius:5px
  }

  span{
    background-color: ${props => props.color};
    padding: 5px 15px;
    color: white;
    text-align: center;
  } 

  ul{
    display: flex;
    justify-content: space-around;
    list-style: none;
    
  }

  p{    
    text-align:center;
  }



  @media (max-width: 768px) {
    min-width: 300px;
  } 
`;

const ProgressBarContainer = styled.div`
  display: flex;
  align-items:center;
  gap: 10px;
  border-radius: 10px;
  
`;

const ProgressBar = styled.div`
  height: 100%;
  border-radius: 10px;
  background-color: ${(props) => props.color};
  min-width: 30%;
  width: ${(props) => props.width}%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  position: relative;
  overflow: hidden;
  padding: 2px ;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
`;

const BackButton = styled.button`
  display: flex; 
background-color: transparent;
  color: white;

  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    opacity: 0.5;
  }

  svg {
    font-size: 30px;
  }
`;
const Teste = styled.div`
  
    display: flex;
    align-items:center;
    gap:20px;
  
    justify-content:space-between;

 
`;

export const typeColors = {
  grass: "#8BBE8A",
  fire: "#FFA756",
  water: "#58ABF6",
  poison: "#9F6E97",
  normal: "#B5B9C4",
  bug: "#8BD674",
  flying: "#748FC9",
  eletric: "#F2CB55",
  ground: "#F78551"
};

export const colorsLabel = {
  grass: "#5b8f56",
  fire: "#e97110",
  water: "#3a86c0",
  poison: "#6e4b6f",
  normal: "#7a7d88",
  bug: "#5b8f43",
  flying: "#4f6d99",
  eletric: "#b18e39",
  ground: "#b05c2c"
};