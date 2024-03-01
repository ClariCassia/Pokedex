const mapPokemonData = (pokemonData) => {
    return pokemonData.map((data) => ({
      nome: data.name,
      imagem: data.sprites?.other?.home?.front_default || '',
      order: data.order,
      type: data.types[0]?.type?.name || '',
    }));
  };
  
  export { mapPokemonData };
  


