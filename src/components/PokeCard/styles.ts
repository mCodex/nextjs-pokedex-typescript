import styled from 'styled-components';

export const Container = styled.button`
  border: 1px solid #fdcb9e80;
  border-radius: 5px;
  background: transparent;
  color: #fff;
  text-transform: capitalize;
  transition: 0.2s background;
  padding: 10px 0;

  &:hover {
    background: #fdcb9e;
    color: #000;
  }

  img {
    width: 100px;
    height: 100px;
    margin: 20px 0;
  }
`;
