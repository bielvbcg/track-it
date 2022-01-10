import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom"
import styled from 'styled-components';
import axios from 'axios';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Footer from './Footer';
import Header from "./Header"
import CriarHabito from "./CriarHabito"
import AppContext from '../contexts/AppContext';

export default function Habitos() {
  const [criarHabito, setCriarHabito] = useState(false)
  const [habito, setHabito] = useState("")
  const [dias, setDias] = useState([])
  const [listaHabitos, setListaHabitos] = useState([])
  const { imagem, token } = useContext(AppContext)

  useEffect(() => { pegarHabitos() }, [])

  function pegarHabitos() {
    const config = {
      headers: {
        "Authorization": `Bearer ${token}
      ` }
    }

    const promessaHabitos = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)

    promessaHabitos.then((response) => setListaHabitos(response.data))
  }

  function excluirHabito(id) {
    const deletar = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, {
      headers: {
        "Authorization": `Bearer ${token}
      ` }
    })

    deletar.then(() => pegarHabitos())
  }

  return (
    <Main>

      <Header imagem={imagem}></Header>

      <TituloHabitos>
        <span>Meus hábitos</span>
        <button onClick={() => setCriarHabito(!criarHabito)} >+</button>
      </TituloHabitos>

      {criarHabito &&
        <CriarHabito
          escondeTela={setCriarHabito}
          habito={habito}
          setHabito={setHabito}
          dias={dias}
          setDias={setDias}
          pegarHabitos={pegarHabitos}
        />}

      {listaHabitos && listaHabitos.map(habito => {
        return (
          <Habito>

            <div>
              <span>{habito.name}</span>

              <div className="caixaDias">
                <DiaDaSemana selecionado={habito.days.includes(0)}>D</DiaDaSemana>
                <DiaDaSemana selecionado={habito.days.includes(1)}>S</DiaDaSemana>
                <DiaDaSemana selecionado={habito.days.includes(2)}>T</DiaDaSemana>
                <DiaDaSemana selecionado={habito.days.includes(3)}>Q</DiaDaSemana>
                <DiaDaSemana selecionado={habito.days.includes(4)}>Q</DiaDaSemana>
                <DiaDaSemana selecionado={habito.days.includes(5)}>S</DiaDaSemana>
                <DiaDaSemana selecionado={habito.days.includes(6)}>S</DiaDaSemana>
              </div>

            </div>

            <ion-icon name="trash-outline" onClick={() => { if (window.confirm("Deseja realmente excluir o habito?")) excluirHabito(habito.id) }}></ion-icon>

          </Habito>
        )
      })}

      {!listaHabitos.length &&
        <SemHabitos>
          <span>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
          </span>
        </SemHabitos>}

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

const Habito = styled.div`
  width: 340px;
  height: 91px;
  
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  
  margin: 0 0 10px 17px;
  padding: 13px 10px 15px 15px;

  background: #FFFFFF;
  border-radius: 5px;

  div span {
    font-size: 19.976px;
    line-height: 25px;

    color: #666666;
  }

  div .caixaDias {
    display: flex;
    margin-top: 10px;
  }

  ion-icon {
    width: 13px;
    height: 15px;

    color: #666666;
  }
`

const DiaDaSemana = styled.div`
    width: 30px;
    height: 30px;

    background: ${props => props.selecionado ? "#CFCFCF" : "#FFFFFF"}; 
    border: 1px solid ${props => props.selecionado ? "#CFCFCF" : "#D5D5D5"};
    box-sizing: border-box;
    border-radius: 5px;

    margin-right: 4px;

    color: ${props => props.selecionado ? "#FFFFFF" : "#DBDBDB"};
`

const SemHabitos = styled.div`
  margin: 29px 17px;

  span {
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
  }
`