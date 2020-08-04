import React from 'react';
// import useSWR from 'swr';

import { Container } from './styles';

interface IHomeProps {
  pokemons: IPokemon[];
}

const Home: React.FC<IHomeProps> = (props: IHomeProps) => {
  const { pokemons } = props;

  return (
    <Container>
      <table>
        <tr>
          <th>#</th>
          <th>Image</th>
          <th>Name</th>
        </tr>
        <tbody>
          {pokemons.map(({ id, name, image }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>
                <img src={image} alt={name} />
              </td>
              <td>
                <span key={name}>{name}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default Home;
