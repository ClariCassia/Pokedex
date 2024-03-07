import axios from 'axios';

const createPokemonInfo = async (nome) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nome}`);
    const pokemonData = response.data;
   

    const imagem = pokemonData.sprites?.other?.home?.front_default 

    const speciesResponse = await axios.get(pokemonData.species.url);
    const speciesData = speciesResponse.data;

    const genderRate = speciesData.gender_rate;
    let gender = "Genderless";

    if (genderRate !== -1) {
      const malePercentage = (8 - genderRate) / 8 * 100;
      const femalePercentage = (genderRate) / 8 * 100;
      gender = `Male: ${malePercentage}%, Female: ${femalePercentage}%`;
    }

    const generationResponse = await axios.get(speciesData.generation.url);
  
   

    const height = pokemonData.height / 10;
    const weight = pokemonData.weight / 10;
  

    const description = speciesData.flavor_text_entries.find(entry => entry.language.name === 'it').flavor_text;

    const captureRate = speciesData.capture_rate;
    const eggGroups = speciesData.egg_groups.map(group => group.name);
    const pokemonWeight = pokemonData.weight;

    const evolutionChainResponse = await axios.get(speciesData.evolution_chain.url);
    const evolutionChainData = evolutionChainResponse.data;

    const extractEvolutionLine = (chain) => {
      const evolutionLine = [chain.species.name];
      if (chain.evolves_to && chain.evolves_to.length > 0) {
        chain.evolves_to.forEach((evolution) => {
          evolutionLine.push(...extractEvolutionLine(evolution));
        });
      }
      return evolutionLine;
    };

    // Buscar habilidades
    const abilities = pokemonData.abilities.map(ability => ability.ability.name);

    // Buscar tipos
    const types = pokemonData.types.map(type => type.type.name);

    // Buscar fraquezas
    const weaknessesResponse = await axios.get(`https://pokeapi.co/api/v2/type/${types[0]}`);
    const weaknessesData = weaknessesResponse.data;
    const weaknesses = weaknessesData.damage_relations.double_damage_from.map(weakness => weakness.name);

    const evolutionLine = extractEvolutionLine(evolutionChainData.chain);

    return {
      nome,
      imagem,
      description,
      gender,  
      height,
      weight,     
      captureRate,
      eggGroups,
      pokemonWeight,
      evolutionLine, abilities,
      types,
      weaknesses
    };
  } catch (error) {
    console.error("Error fetching Pokemon data:", error);
    return null;
  }
};

export default createPokemonInfo;

