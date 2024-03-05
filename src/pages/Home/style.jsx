import styled from "styled-components";

export const ContainerCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1180px;
  gap: 15px;
  padding: 50px;
  background-color: yellow;

  @media (max-width: 1024px) and (min-width: 800px) {
    padding: 20px;
    justify-content: flex-start;
  }

  @media (max-width: 768px) {
    padding: 20px;
    max-width: 600px;
  }

  @media (max-width: 568px) {
    max-width: 400px;
  }
`;

export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  // Adicione outros tipos, se necessário
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
  // Adicione outros tipos, se necessário
};
