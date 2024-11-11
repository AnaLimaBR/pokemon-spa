import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from '../components/PokemonCard';

const Home = () => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchRandomPokemon = async () => {
      const randomId = Math.floor(Math.random() * 150) + 1;
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
      setPokemon(response.data);
    };
    fetchRandomPokemon();
  }, []);

  return (
    <div>
      <h1>Random Pokémon</h1>
      {pokemon && <PokemonCard pokemon={pokemon} />}
    </div>
  );
};

export default Home;
