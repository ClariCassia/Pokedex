export const getTypeColor = (type) => typeColors[type] || typeColors.normal;
export const getTypeColorLabel = (type) => colorsLabel[type] || colorsLabel.normal;


export const typeColors = {
  grass: "#8bbe8a",
  fire: "#eb9d55",
  water: "#75b4eb",
  poison: "#a1809c",
  normal: "#B5B9C4",
  bug: "#9be086",
  flying: "#748FC9",
  electric: "#e4ce8c",
  ground: "#ac8674",
  fairy: "#b88cabfb",
  dark: "#75597e",
  rock: '#423a4495',
  psychic: "#c96e7b",
  dragon: "#aaa2eb",
  ice: "#9bd9ff",
  ghost: "#5268b8",
  steel: "#cecece",
  fighting: "#ca8b77",
};

export const colorsLabel = {
  grass: "#5b8f56b2",
  fire: "#e97210",
  water: "#3a86c0c7",
  poison: "#6e4b6fd8",
  normal: "#7a7d888b",
  bug: "#5b8f4390",
  flying: "#4f6d99",
  electric: "#ebaf25",
  ground: "#744124a7",
  fairy: "#8d156978",
  dark: "#28033375",
  rock: '#423a4495',
  psychic: "#b43348",
  dragon: "#4d3f8ca4",
  ice: "#5dbad4c7",
  ghost: "#3c4b8a",
  steel: "#6e6e6eb2",
  fighting: "#91421c",
};
