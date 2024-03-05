import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const StyledArrowLeft = styled(FaArrowLeft)`
  color: #000; /* Cor do ícone */
  font-size: 30px; /* Tamanho do ícone */
`;

const PokemonDetails = ({ pokemonInfo }) => {
    const navigate = useNavigate();

    if (!pokemonInfo) {
        return <div>Loading...</div>;
    }

    const [malePercentage, femalePercentage] = pokemonInfo.gender
        .match(/\d+\.\d+/g)
        .map((percent) => parseFloat(percent));

    return (
        <>
            <Container>
                <div>
                    <BackButton onClick={() => navigate(-1)}>
                        <StyledArrowLeft />
                    </BackButton>
                    <img src={pokemonInfo.imagem} alt="" />
                </div>
                <ContainerDescription>
                    <h2>{pokemonInfo.nome.charAt(0).toUpperCase() + pokemonInfo.nome.slice(1)}</h2>

                    <div>
                        <p><strong>Gender:</strong></p>

                        <ProgressBarContainer>
                            Masculino:
                            <ProgressBar color="#105be7" width={malePercentage}>
                                {malePercentage}%
                            </ProgressBar>
                            Feminino:
                            <ProgressBar color="#ff0783" width={femalePercentage}>
                                {femalePercentage}%
                            </ProgressBar>
                        </ProgressBarContainer>
                    </div>

                    <p><strong>Type:</strong> {pokemonInfo.types.join(", ")}</p>
                    <p><strong>Abilities:</strong> {pokemonInfo.abilities.join(", ")}</p>
                    <p><strong>Height:</strong> {pokemonInfo.height} m</p>
                    <p><strong>Weight:</strong> {pokemonInfo.weight} kg</p>
                    <p><strong>Capture Rate:</strong> {pokemonInfo.captureRate}</p>
                    <p><strong>Egg Groups:</strong> {pokemonInfo.eggGroups.join(", ")}</p>
                    <p><strong>Pokemon Weight:</strong> {pokemonInfo.pokemonWeight} kg</p>
                    <p><strong>Weaknesses:</strong> {pokemonInfo.weaknesses.join(", ")}</p>
                    <h3>Evolution Line:</h3>
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
  justify-content: center;
  max-width: 1180px;
  gap: 15px;
  padding: 50px;
  
  img {
  
  }
`;

const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;

  h2 {
    font-size: 40px;
  }
`;

const ProgressBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
