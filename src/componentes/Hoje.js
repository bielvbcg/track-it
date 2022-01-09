import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom"
import styled from 'styled-components';
import axios from 'axios';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import Header from "./Header"
import Footer from './Footer';
import AppContext from '../contexts/AppContext';

export default function Hoje() {
  const dia = dayjs().locale("pt-br").format("dddd, D/M");
  const { imagem } = useContext(AppContext)

  return (
    <Main>

      <Header imagem={imagem}></Header>

      <Titulo>
        <div className="data">{dia}</div>
        <div className="progresso">Nenhum hábito concluído ainda</div>
      </Titulo>

      <Habitos>

        <div className="habito">

          <div>
            <span className="titulo">Ler 1 capítulo de livro</span>
            <span className="sequencia">Sequência atual: 3 dias</span>
            <span className="recorde">Seu recorde: 5 dias</span>
          </div>

          <button>
            <ion-icon name="checkmark-outline"></ion-icon>
          </button>

        </div>

        <div className="habito">

          <div>
            <span className="titulo">Ler 1 capítulo de livro</span>
            <span className="sequencia">Sequência atual: 3 dias</span>
            <span className="recorde">Seu recorde: 5 dias</span>
          </div>

          <button>
            <ion-icon name="checkmark-outline"></ion-icon>
          </button>

        </div>

        <div className="habito">

          <div>
            <span className="titulo">Ler 1 capítulo de livro</span>
            <span className="sequencia">Sequência atual: 3 dias</span>
            <span className="recorde">Seu recorde: 5 dias</span>
          </div>

          <button>
            <ion-icon name="checkmark-outline"></ion-icon>
          </button>

        </div>

      </Habitos>

      <Footer></Footer>

    </Main>
  )
}

const Main = styled.div`

`

const Titulo = styled.div`
  margin-top: 70px;
  padding: 28px 17px;

  .data {
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
  }

  .progresso {
    font-size: 17.976px;
    line-height: 22px;

    color: #BABABA;
  }
`

const Habitos = styled.div`
  padding: 0 17px;
  gap: 10px;

  display: flex;
  flex-direction: column;
  
  .habito {
    width: 340px;
    height: 94px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background: #FFFFFF;
    border-radius: 5px;

    padding: 13px 13px 12px 15px;
  }

  .habito div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .habito div .titulo {
    font-size: 19.976px;
    line-height: 25px;

    color: #666666;
  }

  .habito div .sequencia , .habito div .recorde {
    font-size: 12.976px;
    line-height: 16px;

    color: #666666;
  }

  .habito button {
    width: 69px;
    height: 69px;

    background: #EBEBEB;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
  }

  .habito button ion-icon {
    color: #ffffff;

    font-size: 45px;
    --ionicon-stroke-width: 70px;
  }
`
