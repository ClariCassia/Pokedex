export const getTypeColor = (type) => typeColors[type] || typeColors.normal;
export const getTypeColorLabel = (type) => colorsLabel[type] || colorsLabel.normal;


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