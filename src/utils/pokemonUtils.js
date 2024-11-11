// src/utils/pokemonUtils.js
export const getRandomPokemon = async () => {
    const randomId = Math.floor(Math.random() * 1000) + 1; // Gera um ID aleatório entre 1 e 1000
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    const data = await response.json();
  
    return {
      name: data.name,
      type: data.types.map((type) => type.type.name).join(', '),
      image: data.sprites.front_default,
    };
  };
  