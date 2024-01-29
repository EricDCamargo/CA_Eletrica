import { colors } from '@src/shared/themes/colors'
import styled from 'styled-components'

export const NavBar = () => {
  return <Container></Container>
}

const Container = styled.div`
  display: grid;
  grid-area: NB;
  background-color: ${colors.black};
  z-index: 2;
  display: flex;
  align-items: center;
  padding: 0px 30px;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  @media (max-width: 1000px) {
    background-color: #0a4f4f;
    z-index: 2;
    height: 70px;
    align-items: center;
    background-color: ${colors.black};
    width: 100%;
    position: fixed;
    top: 0;
  }
`
