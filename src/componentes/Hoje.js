import { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom"
import styled from 'styled-components';
import axios from 'axios';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

export default function Hoje() {
  const percentage = 66;
  const dia = dayjs().locale("pt-br").format("dddd, D/M");

  return (
    <Main>

      <Header>
        <span>TrackIt</span>
        <div></div>
      </Header>

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

      <Footer>
        <span>Hábitos</span>

        <div>
          <CircularProgressbar
            value={percentage}
            text={`Hoje`}
            background
            backgroundPadding={6}
            styles={buildStyles({
              backgroundColor: "#3e98c7",
              textColor: "#fff",
              pathColor: "#fff",
              trailColor: "transparent"
            })}
          />
        </div>

        <span>Histórico</span>
      </Footer>

    </Main>
  )
}

const Main = styled.div`

`

const Header = styled.div`

  height: 70px;
  background-color: #126BA5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 18px;

  position: fixed;
  left: 0;
  top: 0;
  right: 0;

  span {
    color: #FFFFFF;
    font-family: Playball;
    font-size: 38.982px;
    line-height: 49px;
  }

  div {
    height: 51px;
    width: 51px;
    border-radius: 50%;
    background: black;
  }
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

const Footer = styled.div`
  height: 70px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;

  span {
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #52B6FF;
  }

  div {
    width: 91px;
    height: 91px;
    margin-bottom: 40px;
  }
`