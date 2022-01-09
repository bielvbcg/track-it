import { useState } from 'react';
import styled from 'styled-components';

export default function CriarHabito({ funcao }) {
  const [habito, setHabito] = useState("")
  const [dias, setDias] = useState([false, false, false, false, false, false, false])

  function novoHabito(event) {
    event.preventDefault();
  }

  function selecionarDia(dia) {
    dias[dia] = !dias[dia]
    setDias([...dias])
    console.log(dias)
  }

  function handleColor(dia) {
    if (dias[dia]) { return "#D5D5D5" }
    else return "#FFFFFF"
  }

  return (
    <Criar onSubmit={novoHabito}>
      <input type="text" placeholder="nome do hábito" value={habito} onChange={e => setHabito(e.target.value)} />

      <Dias>
        <button onClick={() => selecionarDia(0)} cor={handleColor(0)}>D</button>
        <button onClick={() => selecionarDia(1)} cor={handleColor(1)}>S</button>
        <button onClick={() => selecionarDia(2)} cor={handleColor(2)}>T</button>
        <button onClick={() => selecionarDia(3)} cor={handleColor(3)}>Q</button>
        <button onClick={() => selecionarDia(4)} cor={handleColor(4)}>Q</button>
        <button onClick={() => selecionarDia(5)} cor={handleColor(5)}>S</button>
        <button onClick={() => selecionarDia(6)} cor={handleColor(6)}>S</button>
      </Dias>

      <Botoes>
        <button className="cancelar" onClick={() => funcao(false)}>Cancelar</button>
        <button className="salvar" type='submit'>Salvar</button>
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

  button {
    width: 30px;
    height: 30px;

    background: ${props => props.cor};
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;

    margin-right: 4px;

    color: #DBDBDB;
  }
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