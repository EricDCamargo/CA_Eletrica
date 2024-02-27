import { SVGs } from '@src/assets'
import { SlEnvolopeLetter, SlPhone } from 'react-icons/sl'
import styled from 'styled-components'
import { FooterBottom } from './footerBottom'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { colors } from '@src/shared/themes/colors'
import { SvgRender } from '../svgRender'
import useWindowSize from '@src/shared/hooks/getWindowSize'

export const Footer = () => {
  const { newLogo, linkedinIco, instagramIco } = SVGs
  const navigate = useNavigate()
  const { t } = useTranslation()
  const size = useWindowSize()
  return (
    <FooterConteiner>
      <FooterBody>
        <MenuSection width="37.5%">
          <SvgRender src={newLogo} />
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            quod iure dolor nihil minima assumenda tempora enim iusto quaerat
            debitis sunt esse animi voluptates neque, architecto id dolore
            provident minus!
          </span>
        </MenuSection>
        {size.width > 768 && (
          <MenuSection width="16.6%" marginLeft="10%">
            <h3>Menu</h3>
            <a onClick={() => navigate('/home')}>{t('home:home')}</a>
            <a onClick={() => navigate('/institutional')}>
              {t('home:institutional')}
            </a>
            <a onClick={() => navigate('/projects')}>{t('home:projects')}</a>
            <a onClick={() => navigate('/clients')}>{t('home:clients')}</a>
            <a onClick={() => navigate('/news')}>{t('home:news')}</a>
            <a onClick={() => navigate('/contact')}>{t('home:contact')}</a>
          </MenuSection>
        )}

        <MenuSection width="17.5%" marginLeft="2.5%">
          <h3>Contatos</h3>
          <span>
            <SlEnvolopeLetter width="1.5vw" height="auto" /> Contato@gmail.com
          </span>
          <span>
            <SlPhone width="1.5vw" height="auto" /> 15 99728-4066
          </span>
        </MenuSection>
        <MenuSection width="12.5%" marginLeft="2.5%">
          <h3>Redes sociais </h3>
          <div className="mediaConteiner">
            <a>
              <img src={linkedinIco} />
            </a>
            <a>
              <img src={instagramIco} />
            </a>
          </div>
        </MenuSection>
      </FooterBody>
      <FooterBottom />
    </FooterConteiner>
  )
}

const FooterConteiner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  @media (max-width: 690px) {
    height: 50px;
    width: 100%;
    position: relative;
    z-index: 1;
    bottom: 0;
  }
`
const FooterBody = styled.div`
  display: flex;
  padding: 8vw 8.33vw 0;
  width: 100%;
  background-color: ${colors.black};
  position: relative;
  color: #969696;
  cursor: inherit;
  padding-bottom: 8vh;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`
const MenuSection = styled.div<{ width?: string; marginLeft?: string }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  width: ${props => (props.width ? props.width : '100%')};
  margin-left: ${props => (props.marginLeft ? props.marginLeft : 0)};
  h3 {
    font-size: 1.3vw;
    line-height: 1.2;
    color: #fff;
    font-weight: 800;
    margin-bottom: 4vh;
  }

  a {
    cursor: pointer;
  }
  a,
  span {
    font-weight: 300;
    font-size: 1.3vw;
    line-height: 1.3;
    margin-top: 2vh;
  }

  .mediaConteiner {
    display: flex;
    gap: 10px;
  }
`
