import { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom"
import styled from 'styled-components';
import axios from 'axios';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Historico() {
  const percentage = 66;

  return (
    <Main>

      <Header>
        <span>TrackIt</span>
        <div></div>
      </Header>

      <TituloHabitos>
        <span>Histórico</span>
      </TituloHabitos>

      <SemHabitos>
        <span>Em breve você poderá ver o histórico dos seus hábitos aqui!</span>
      </SemHabitos>

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