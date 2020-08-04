import React from 'react';

import axios from 'axios';

import HomePage from '../src/pages/Home';

import api from '../src/utils/api';

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
    params: { limit: 100 },
  });

  const pokemons: IPokemon[] = await Promise.all(
    initialPokemonsData.map(async (pokemon: IPokemon) => {
      const { url } = pokemon;

      const { data: pokemonDetail } = await axios.get(url);

      return {
        ...pokemon,
        id: pokemonDetail.id,
        image: `https://pokeres.bastionbot.org/images/pokemon/${pokemonDetail.id}.png`,
      };
    })
  );

  return {
    props: { pokemons },
  };
};
