import React from 'react';
import styled from 'styled-components';


const PokemonDetails = ({ pokemonInfo }) => {
    if (!pokemonInfo) {
        return <div>Loading...</div>;
    }

    return (
        <>

            <Container>
                <div>
                    <img src={pokemonInfo.imagem} alt="" />
                    <h2>{pokemonInfo.nome.charAt(0).toUpperCase() + pokemonInfo.nome.slice(1)}</h2>
                </div>
                <div>

                    <p><strong>Gender:</strong> {pokemonInfo.gender}</p>
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
                </div>

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

 img{
    
 }
`


