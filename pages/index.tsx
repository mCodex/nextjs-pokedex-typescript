import React from 'react';

import HomePage from '../src/pages/Home';

import api from '../src/utils/api';
import organizeInitialPokemonData from '../src/utils/organizeInitialPokemonData';

interface IHomeProps {
  pokemons: IPokemon[];
}

const Home: React.FC<IHomeProps> = (props: IHomeProps) => <HomePage {...props} />;

export default Home;

interface IGetStaticProps {
  props: {
    pokemons: IPokemon[];
  };
}

export const getStaticProps = async (): Promise<IGetStaticProps> => {
  const {
    data: { results: initialPokemonsData },
  } = await api.get('pokemon', {
    params: { limit: 40 },
  });

  const pokemons: IPokemon[] = await organizeInitialPokemonData(initialPokemonsData);

  return {
    props: { pokemons },
  };
};
