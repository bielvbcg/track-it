import styled from 'styled-components';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { Link } from "react-router-dom"
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from 'react';
import AppContext from '../contexts/AppContext';

export default function Footer() {
  const { porcentagem } = useContext(AppContext)

  return (
    <Container>

      <StyledLink to="/habitos">
        <span>Hábitos</span>
      </StyledLink>

      <Link to="/hoje">
        <div>
          <CircularProgressbar
            value={porcentagem - (porcentagem % 1)}
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
      </Link>

      <StyledLink to="/historico">
        <span>Histórico</span>
      </StyledLink>

    </Container>
  )
}

const Container = styled.div`
  height: 70px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;

  background: #FFFFFF;

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

const StyledLink = styled(Link)`
  text-decoration: none;
`