import React from 'react';
import {StyledArrowLeft} from './styles'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import firstLetterUppercase from '../../services/firstLetterUppercase'
import {getTypeColor,getTypeColorLabel} from '../../services/getTypeColors'

const PokemonDetails = ({ pokemonInfo }) => {

  const navigate = useNavigate();

  const { theme } = useTheme();

  if (!pokemonInfo) {
    return <div>Loading...</div>;
  }

  let malePercentage = 0;
  let femalePercentage = 0;

  // Se o gênero não for 'Genderless', calcula as porcentagens
  if (pokemonInfo.gender !== 'Genderless') {
    const [maleString, femaleString] = pokemonInfo.gender.split(', ');

    // Verifica se maleString e femaleString são válidos antes de calcular as porcentagens
    if (maleString && femaleString) {
      malePercentage = parseFloat(maleString.match(/\d+/)[0]);
      femalePercentage = parseFloat(femaleString.match(/\d+/)[0]);
    }
  }

  return (
    <>
      <Container>
        <div>
          <BackButton onClick={() => navigate(-1)}>
          <StyledArrowLeft theme={theme}  />  
          </BackButton>
          <img src={pokemonInfo.imagem} alt="" />
        </div>

        <ContainerDescription theme={theme} background={getTypeColor(pokemonInfo.types[0])} color={getTypeColorLabel(pokemonInfo.types[0])}>
          <h2>{pokemonInfo.nome.charAt(0).toUpperCase() + pokemonInfo.nome.slice(1)}</h2>

          <Teste>
            <span >Egg Groups:</span>
            <p>{pokemonInfo.eggGroups.map(group => firstLetterUppercase(group)).join(", ")}</p>

            <span>Type:</span>
            <p>{pokemonInfo.types.map(type => firstLetterUppercase(type)).join(", ")}</p>

          </Teste>

          <span>Gender:</span>
          {pokemonInfo.gender === 'Genderless' ? (
            <p>Sem especificação de gênero</p>
          ) : (
            <ProgressBarContainer>
              <div>Masculino:</div>
              <ProgressBar color="#105be7b5" width={malePercentage}>
                {malePercentage}%
              </ProgressBar>
              <div>Feminino:</div>
              <ProgressBar color="#ff0783" width={femalePercentage}>
                {femalePercentage}%
              </ProgressBar>
            </ProgressBarContainer>
          )}

          <Teste>
            <span>Height:</span>
            <p> {pokemonInfo.height} m</p>
            <span> Weight:</span>
            <p> {pokemonInfo.pokemonWeight} kg</p>
          </Teste>

          <span>Abilities:</span>
          <p>{pokemonInfo.abilities.map(abilitie => firstLetterUppercase(abilitie)).join(", ")}</p>

          <span>Weaknesses:</span>
          <p>{pokemonInfo.weaknesses.map(weaknesse => firstLetterUppercase(weaknesse)).join(", ")}</p>


          <span>Evolution Line:</span>
          <ul>
            {pokemonInfo.evolutionLine.map((pokemon, index) => (
              <li key={index}>{firstLetterUppercase(pokemon)}</li>
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
  
`;
const Teste = styled.div`
  
    display: flex;
    align-items:center;
    gap:20px;
  
    justify-content:space-between;
 
`;

