import React, { useState, useEffect, useMemo, useCallback } from 'react';
import useSWR from 'swr';

import PokeCard from '../../components/PokeCard';
import Loader from '../../components/Loader';

import api from '../../utils/api';
import organizeInitialPokemonData from '../../utils/organizeInitialPokemonData';

import { Container, PokeList, PaginationContainer } from './styles';

interface IHomeProps {
  pokemons: IPokemon[];
}

const Home: React.FC<IHomeProps> = (props: IHomeProps) => {
  const qtyPokemonFetchedPerRequest = 40;

  const { pokemons: prerenderedPokemons } = props;

  const [offset, setOffset] = useState(0);
  const [pokemons, setPokemons] = useState(prerenderedPokemons);

  const { data, isValidating } = useSWR(
    `pokemon?limit=${qtyPokemonFetchedPerRequest}&offset=${offset}`,
    api
  );

  useEffect(() => {
    const pokemonsFromAPI = data?.data?.results ?? [];

    const organizePokemonsData = async (): Promise<void> => {
      const updatedPokemons = await organizeInitialPokemonData(pokemonsFromAPI);
      setPokemons(updatedPokemons);
    };

    organizePokemonsData();
  }, [data]);

  const totalPaginationPages = useMemo(() => {
    const totalPokemons = data?.data?.count ?? 1;

    return new Array(Math.ceil(totalPokemons / qtyPokemonFetchedPerRequest)).fill('');
  }, [data]);

  const handlePaginationIconOnClick = useCallback((index) => {
    setOffset(qtyPokemonFetchedPerRequest * index);
  }, []);

  return (
    <Container>
      <h1>Pokédex</h1>

      {isValidating ? (
        <Loader />
      ) : (
        <>
          <PokeList>
            {pokemons.map((pokemon) => (
              <PokeCard key={pokemon.name} {...pokemon} />
            ))}
          </PokeList>
          <PaginationContainer>
            {totalPaginationPages.map((_, i) => (
              <button
                type="button"
                key={i.toString()}
                onClick={() => handlePaginationIconOnClick(i)}
              >
                {i + 1}
              </button>
            ))}
          </PaginationContainer>
        </>
      )}
    </Container>
  );
};

export default Home;
