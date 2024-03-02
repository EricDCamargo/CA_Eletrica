import { SVGs } from '@src/assets'
import { styled } from 'styled-components'
import { SvgRender } from '../svgRender'

export const FooterBottom = () => {
  const { newLogo } = SVGs
  return (
    <FooterBrand>
      <a>
        <SvgRender src={newLogo} />
      </a>
      <span>Política de privacidade </span>
    </FooterBrand>
  )
}
const FooterBrand = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  align-items: center;
  padding: 4vh 8.33333vw;
  background-color: #23242b;
  justify-content: space-between;
  font-size: 1.3vw;

  @media (max-width: 440px) {
    font-size: 3vw;
    .svgRender {
      height: 50px;
    }
  }
`
