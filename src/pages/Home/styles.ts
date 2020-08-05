import styled from 'styled-components';

export const Container = styled.main`
  text-align: center;
  margin: 0 20px;

  h1 {
    padding: 10px 0;
  }
`;

export const PokeList = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
`;

// interface IPaginationContainer {
//   active: boolean;
// }

export const PaginationContainer = styled.div`
  margin: 20px;

  button {
    color: white;
    padding: 4px;
    margin: 0 1px;
    background: transparent;
    border: none;
    animation: 0.2s background-color;
    font-size: 18px;

    &:hover {
      background-color: #00b7c2;
      border-radius: 2px;
    }
  }
`;
