import styled from 'styled-components';

export default function Header({ imagem }) {
  return (
    <Container imagem={imagem}>
      <span>TrackIt</span>
      <div></div>
    </Container>
  )
}

const Container = styled.div`
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
    background-image: url(${props => props.imagem})
  }
`

