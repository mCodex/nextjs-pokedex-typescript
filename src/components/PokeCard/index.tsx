import React from 'react';

import { Container } from './styles';

const PokeCard: React.FC<IPokemon> = ({ id, image, name }) => (
  <Container>
    <h3># {id}</h3>

    <img src={image} alt={name} />

    <h4 key={name}>{name}</h4>
  </Container>
);

export default PokeCard;
