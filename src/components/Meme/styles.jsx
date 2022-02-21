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
    border: 1px solid #D5D4D8;
    text-indent: 5px;
  }
  button {
    grid-column: 1 / 3;
    height: 3rem;
    background: linear-gradient(90deg, rgba(103, 34, 128, 1) 0%, rgba(166,38,211,1) 100%);
    color: white;
    font-family: 'Karla';
    font-size: 1.5rem;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }
`
export const MemeContainer = styled.div`
  position: relative;
  h4 {
    position: absolute;
    width: 80%;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
    margin: 15px 0;
    padding: 0 5px;
    font-family: impact, sans-serif;
    font-size: 2em;
    text-transform: uppercase;
    color: white;
    letter-spacing: 1px;
    text-shadow:
        2px 2px 0 #000,
        -2px -2px 0 #000,
        2px -2px 0 #000,
        -2px 2px 0 #000,
        0 2px 0 #000,
        2px 0 0 #000,
        0 -2px 0 #000,
        -2px 0 0 #000,
        2px 2px 5px #000;
  }
  .top {
    top: 0;
  }
  .bottom {
    bottom: 0;
  }

`

export const MemeImage = styled.img`
  width: 100%;
  border-radius: 5px;
`
