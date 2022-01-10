import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import Header from "./Header"
import Footer from './Footer';
import AppContext from '../contexts/AppContext';

export default function Hoje() {
  const [listaHabitos, setListaHabitos] = useState([]);
  const [carregando, setCarregando] = useState(false)
  const [aux, setAux] = useState(null)
  const { imagem, token, porcentagem, setPorcentagem } = useContext(AppContext)
  const dia = dayjs().locale("pt-br").format("dddd, D/M");

  useEffect(() => {
    carregarPagina()
    console.log(porcentagem)
  }, [])

  function carregarPagina() {
    const config = {
      headers: {
        "Authorization": `Bearer ${token}
      ` }
    }

    const promessa = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)

    promessa.then(response => {
      setListaHabitos(response.data)

      let numeroHabitos = 0
      response.data.map(habito => { if (habito.done) { numeroHabitos++ } })

      setPorcentagem((numeroHabitos / listaHabitos.length) * 100)
      setAux(true)
    })
  }

  function marcarHabito(id, done) {
    setCarregando(true)

    const config = {
      headers: {
        "Authorization": `Bearer ${token}
      ` }
    }

    const rota = done ? "uncheck" : "check"

    axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/${rota}`, {}, config)

    carregarPagina()
    setCarregando(false)
  }

  return (
    <Main>

      <Header imagem={imagem}></Header>

      <Titulo>
        <div className="data">{dia}</div>
        {porcentagem === 0 || porcentagem === Infinity || porcentagem === NaN ?
          <div className="progresso">Nenhum hábito concluído ainda</div> :
          <div className="concluidos">{aux && Math.round(porcentagem)}% dos hábitos concluídos</div>
        }
      </Titulo>

      <Habitos>

        {listaHabitos.map(habito => (
          <Habito
            feito={habito.done}
            maiorSequencia={habito.currentSequence === habito.highestSequence && habito.highestSequence !== 0}>

            <div>
              <span className="titulo">{habito.name}</span>
              <span className="sequencia">Sequência atual: <span>{habito.currentSequence} dias</span></span>
              <span className="recorde">Seu recorde: <span>{habito.highestSequence} dias</span></span>
            </div>

            <button onClick={() => marcarHabito(habito.id, habito.done)} disabled={carregando}>
              <ion-icon name="checkmark-outline"></ion-icon>
            </button>

          </Habito>
        ))}

      </Habitos>

      <Footer></Footer>

    </Main>
  )
}

const Main = styled.div`
  margin-bottom: 70px;
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

  .concluidos {
    font-size: 17.976px;
    line-height: 22px;

    color: #8FC549;
  }
`

const Habitos = styled.div`
  padding: 0 17px;
  gap: 10px;

  display: flex;
  flex-direction: column;
`

const Habito = styled.div`
    width: 340px;
    height: 94px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background: #FFFFFF;
    border-radius: 5px;

    padding: 13px 13px 12px 15px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  div .titulo {
    font-size: 19.976px;
    line-height: 25px;

    color: #666666;
  }

  div .sequencia ,  div .recorde {
    font-size: 12.976px;
    line-height: 16px;

    color: #666666;
  }

  div .sequencia span {
    ${props => props.feito && "color: #8FC549;"}
  }

  div .recorde span {
    ${props => props.maiorSequencia && "color: #8FC549;"}
  }

  button {
    width: 69px;
    height: 69px;

    background: ${props => props.feito ? "#8FC549" : "#EBEBEB"};
    border: 1px solid #E7E7E7;
    border-radius: 5px;
  }

  button ion-icon {
    color: #ffffff;

    font-size: 45px;
    --ionicon-stroke-width: 70px;
  }
`
