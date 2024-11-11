import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const PokemonCard = ({ pokemon }) => (
  <Card>
    <CardContent>
      <Typography variant="h5">{pokemon.name}</Typography>
      <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
      <Typography>Type: {pokemon.types.map(type => type.type.name).join(', ')}</Typography>
      <Typography>Weight: {pokemon.weight}</Typography>
    </CardContent>
  </Card>
);

export default PokemonCard;
