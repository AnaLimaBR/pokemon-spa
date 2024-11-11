import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PokemonCard from '../components/PokemonCard';

const PokemonDetail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      setPokemon(response.data);
    };
    fetchPokemon();
  }, [id]);

  return (
    <div>
      <h1>Pokémon Details</h1>
      {pokemon && <PokemonCard pokemon={pokemon} />}
    </div>
  );
};

export default PokemonDetail;
