import { SVGs } from '@src/assets'
import Swiper from '@src/shared/components/swiper'
import { colors } from '@src/shared/themes/colors'
import { styled } from 'styled-components'

const Home = () => {
  const { logo_1 } = SVGs
  const images = [
    logo_1,
    logo_1,
    logo_1,
    logo_1,
    logo_1,
    logo_1,
    logo_1,
    logo_1,
    logo_1,
    logo_1,
    logo_1,
    logo_1,
    logo_1,
    logo_1,
    logo_1,
    logo_1,
    logo_1,
    logo_1,
    logo_1,
    logo_1,
    logo_1,
    logo_1,
    logo_1,
    logo_1,
    logo_1,
    logo_1,
    logo_1,
    logo_1,
    logo_1
  ]

  return (
    <>
      <MainClientsConteiner>
        <h2 className="title">PRINCIPAIS CLIENTES</h2>
        <div className="line" />
        <span className="description">
          Temos entre os nossos principais clientes algumas das maiores e mais
          importantes empresas do Brasil
        </span>
        <Swiper images={images} />
      </MainClientsConteiner>
    </>
  )
}

export default Home

const MainClientsConteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.white};
  padding: 10vh 0 1vw 0;
  border-bottom: 1px solid #707070;
  
  @media (min-width: 0px) and (max-width: 991px) {
    border-bottom: none;
  }

  h2.title {
    font-size: 2.7vw;
    font-family: 'Work Sans', sans-serif;
    font-weight: 800;
    line-height: 3vw;
  }
  @media (min-width: 0px) and (max-width: 991px) {
    h2.title {
      font-size: 6vw;
    }
  }

  div.line {
    width: 25%;
    height: auto;
    border: 1px solid ${colors.white};
    margin: 2vh 0;
  }
  @media (min-width: 0px) and (max-width: 991px) {
    div.line {
      width: 80%;
      height: auto;
    }
  }

  span.description {
    font-family: 'Work Sans';
    font-size: 1.4vw;
    line-height: 1.6vw;
    width: 50%;
    height: auto;
    text-align: center;
  }
  @media (min-width: 0px) and (max-width: 991px) {
    span.description {
      font-size: 3vw;
      line-height: initial;
      width: 100%;
    }
  }
`
