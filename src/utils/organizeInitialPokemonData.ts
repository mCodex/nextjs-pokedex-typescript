import axios from 'axios';

export default async (pokemons: IPokemon[]): Promise<IPokemon[]> =>
  Promise.all(
    pokemons.map(async (pokemon: IPokemon) => {
      const { url } = pokemon;

      const { data: pokemonDetail } = await axios.get(url);

      return {
        ...pokemon,
        id: pokemonDetail.id,
        image: `https://pokeres.bastionbot.org/images/pokemon/${pokemonDetail.id}.png`,
      };
    })
  );
