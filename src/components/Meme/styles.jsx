import styled from 'styled-components'

export const MemeGrid = styled.div`
  display: grid;
  gap: 2rem;

  .form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }
  input {
    height: 2rem;
    border-radius: 5px;
    border-width: 1px;
    border-color: #D5D4D8;
    padding-left: 1rem;
  }
  button {
    grid-column: 1 / 3;
    height: 3rem;
    background: linear-gradient(90deg, rgba(103, 34, 128, 1) 0%, rgba(166,38,211,1) 100%);
    color: white;
    font-family: 'Karla';
    font-size: 1.5rem;
    border-radius: 5px;
  }

`
export const MemeImage = styled.img`
  width: 100%;

`
