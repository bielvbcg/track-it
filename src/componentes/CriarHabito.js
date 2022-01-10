import { useContext } from 'react';
import styled from 'styled-components';
import AppContext from '../contexts/AppContext';
import BotaoDias from './BotaoDias';
import axios from 'axios';

export default function CriarHabito({ escondeTela, habito, setHabito, dias, setDias, pegarHabitos }) {
  const { token } = useContext(AppContext)

  function novoHabito(event) {
    event.preventDefault();

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
    })
    promessaHabito.catch(error => {
      alert(error.response.data.message)
    })
  }

  return (

    <Criar onSubmit={novoHabito}>
      <input type="text" placeholder="nome do hábito" value={habito} onChange={e => setHabito(e.target.value)} />

      <Dias>
        <BotaoDias dia="0" funcaoDias={setDias} arrayDias={dias}>D</BotaoDias>
        <BotaoDias dia="1" funcaoDias={setDias} arrayDias={dias}>S</BotaoDias>
        <BotaoDias dia="2" funcaoDias={setDias} arrayDias={dias}>T</BotaoDias>
        <BotaoDias dia="3" funcaoDias={setDias} arrayDias={dias}>Q</BotaoDias>
        <BotaoDias dia="4" funcaoDias={setDias} arrayDias={dias}>Q</BotaoDias>
        <BotaoDias dia="5" funcaoDias={setDias} arrayDias={dias}>S</BotaoDias>
        <BotaoDias dia="6" funcaoDias={setDias} arrayDias={dias}>S</BotaoDias>
      </Dias>

      <Botoes>
        <button className="cancelar" onClick={() => escondeTela(false)}>Cancelar</button>
        <button className="salvar" type="submit">Salvar</button>
      </Botoes>

    </Criar>
  )
}

const Criar = styled.form`
  width: 340px;
  height: 180px;
  padding: 0 17px;
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
    background: #52B6FF;
    font-size: 15.976px;
    line-height: 20px;
    color: #FFFFFF;
    border: none;
    border-radius: 4.63636px;
  }
`