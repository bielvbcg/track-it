import { useContext } from 'react';
import styled from 'styled-components';
import 'react-circular-progressbar/dist/styles.css';
import Footer from './Footer';
import Header from "./Header"
import AppContext from '../contexts/AppContext';

export default function Historico() {
  const { imagem } = useContext(AppContext)

  return (
    <Main>

      <Header imagem={imagem}></Header>

      <TituloHabitos>
        <span>Histórico</span>
      </TituloHabitos>

      <SemHabitos>
        <span>Em breve você poderá ver o histórico dos seus hábitos aqui!</span>
      </SemHabitos>

      <Footer></Footer>

    </Main>
  )
}

const Main = styled.div`

`

const TituloHabitos = styled.div`

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 70px 17px 0 17px;
  padding: 28px 0;

  span {
    font-family: Lexend Deca;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
  }

  button {
    width: 40px;
    height: 35px;

    background: #52B6FF;
    border: none;
    border-radius: 4.63636px;

    font-size: 26.976px;
    line-height: 34px;
    text-align: center;
    color: #FFFFFF;
  }
`

const SemHabitos = styled.div`
  margin: 0 17px;

  span {
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
  }
`