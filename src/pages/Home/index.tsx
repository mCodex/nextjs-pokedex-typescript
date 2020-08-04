import React from 'react';
// import useSWR from 'swr';

import { Container, PokeList, PokeCard } from './styles';

interface IHomeProps {
  pokemons: IPokemon[];
}

const Home: React.FC<IHomeProps> = (props: IHomeProps) => {
  const { pokemons } = props;

  return (
    <Container>
      <h1>Pokédex</h1>

      <PokeList>
        {pokemons.map(({ id, name, image }) => (
          <PokeCard key={id}>
            <h3># {id}</h3>

            <img src={image} alt={name} />

            <h4 key={name}>{name}</h4>
          </PokeCard>
        ))}
      </PokeList>
    </Container>
  );
};

export default Home;
