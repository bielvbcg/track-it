import { useContext, useState } from 'react';
import styled from 'styled-components';
import AppContext from '../contexts/AppContext';
import BotaoDias from './BotaoDias';
import axios from 'axios';
import Loader from "react-loader-spinner";

export default function CriarHabito({ escondeTela, habito, setHabito, dias, setDias, pegarHabitos }) {
  const [carregando, setCarregando] = useState(false)
  const { token } = useContext(AppContext)

  function novoHabito(event) {
    event.preventDefault();
    setCarregando(true)

    const body = { name: habito, days: dias }

    const config = {
      headers: { "Authorization": `Bearer ${token}` }
    }

    const promessaHabito = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", body, config)

    promessaHabito.then(promessa => {
      console.log(promessa.data)
      escondeTela(false)
      setHabito("")
      setDias([])
      pegarHabitos()
      setCarregando(false)
    })
    promessaHabito.catch(error => {
      alert(error.response.data.message)
      setCarregando(false)
    })
  }

  return (

    <Criar onSubmit={novoHabito} carregando={carregando}>
      <input type="text" placeholder="nome do hábito" value={habito} onChange={e => setHabito(e.target.value)} disabled={carregando} />

      <Dias>
        <BotaoDias dia="0" funcaoDias={setDias} arrayDias={dias} carregando={carregando}>D</BotaoDias>
        <BotaoDias dia="1" funcaoDias={setDias} arrayDias={dias} carregando={carregando}>S</BotaoDias>
        <BotaoDias dia="2" funcaoDias={setDias} arrayDias={dias} carregando={carregando}>T</BotaoDias>
        <BotaoDias dia="3" funcaoDias={setDias} arrayDias={dias} carregando={carregando}>Q</BotaoDias>
        <BotaoDias dia="4" funcaoDias={setDias} arrayDias={dias} carregando={carregando}>Q</BotaoDias>
        <BotaoDias dia="5" funcaoDias={setDias} arrayDias={dias} carregando={carregando}>S</BotaoDias>
        <BotaoDias dia="6" funcaoDias={setDias} arrayDias={dias} carregando={carregando}>S</BotaoDias>
      </Dias>

      <Botoes carregando={carregando}>
        <button className="cancelar" onClick={() => escondeTela(false)}>Cancelar</button>
        <button className="salvar" type="submit" disabled={carregando}>
          {carregando ?
            <Loader
              type="ThreeDots"
              color="#FFFFFF"
              height={30}
              width={50}
            /> :
            "Salvar"}
        </button>
      </Botoes>

    </Criar>
  )
}

const Criar = styled.form`
  width: 340px;
  height: 180px;
  padding: 0;
  margin-left: 17px;
  margin-bottom: 20px;
  border-radius: 5px;
  background-color: #FFFFFF;

  input {
    width: 303px;
    height: 45px;

    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin: 18px 18px 10px 19px;
    padding-left: 11px;
    
    font-size: 19.976px;
    line-height: 25px;
    
    ${props => props.carregando && "backgroundColor: #F2F2F2;"}
    ::placeholder {
      color: #DBDBDB;
    }
  }
`

const Dias = styled.div`
  padding-left: 17px;
`

const Botoes = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  padding-top: 29px;

  .cancelar {
    width: 84px;
    height: 35px;
    background: #FFFFFF;
    color: #52B6FF;
    font-size: 15.976px;
    line-height: 20px;
    border: none;
  }

  .salvar {
    width: 84px;
    height: 35px;
    background: ${props => props.carregando ? "#86CCFF" : "#52B6FF"};
    font-size: 15.976px;
    line-height: 20px;
    color: #FFFFFF;
    border: none;
    border-radius: 4.63636px;
  }
`