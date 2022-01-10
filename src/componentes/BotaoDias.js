import { useState } from 'react';
import styled from 'styled-components';

export default function BotaoDias(props) {
  const [selecionado, setSelecionado] = useState(props.arrayDias.includes(props.dia))

  function handleSelecionado(dia) {
    const array = [...props.arrayDias]

    if (array.includes(dia)) {
      props.funcaoDias(array.filter(item => { if (item !== dia) return true }))
    }
    else {
      props.funcaoDias([...array, dia])
    }

    setSelecionado(!selecionado)
  }

  return (
    <Button type="button" onClick={() => handleSelecionado(props.dia)} clickado={selecionado}>{props.children}</Button>
  )
}

const Button = styled.button`
    width: 30px;
    height: 30px;

    background: ${props => props.clickado ? "#CFCFCF" : "#FFFFFF"}; 
    border: 1px solid ${props => props.clickado ? "#CFCFCF" : "#D5D5D5"};
    box-sizing: border-box;
    border-radius: 5px;

    margin-right: 4px;

    color: ${props => props.clickado ? "#FFFFFF" : "#DBDBDB"};
`