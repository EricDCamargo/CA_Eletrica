import { SVGs } from '@src/assets'
import { SlEnvolopeLetter, SlLocationPin, SlPhone } from 'react-icons/sl'
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
          <span>{t('home:footerText')}</span>
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

        <MenuSection width="20%" marginLeft="2%">
          <h3>{t('home:contacts')}</h3>
          <span className="contact">
            <SlEnvolopeLetter className="contactIco" />
            Contato@gmail.com
          </span>
          <span className="contact">
            <SlPhone className="contactIco" /> 15 99728-4066
          </span>
          <span className="contact">
            <SlLocationPin className="contactIco" /> Rua Vinte e um de abril,
            162 Residencial Salto Ville | CEP: 13323-431 São Paulo/SP
          </span>
        </MenuSection>
        <MenuSection width="12.5%" marginLeft="2.5%">
          <h3>{t('home:socialMedia')}</h3>
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

  width: 100%;
  @media (max-width: 690px) {
    width: 100%;
    position: relative;
    z-index: 1;
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
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 2vw;
  }
  .mediaConteiner img {
    width: 3vw;
  }
  .contact {
    display: flex;

    align-items: center;
    justify-content: center;
    margin-bottom: 4vh;
    gap: 5px;
  }
  .contactIco {
    min-width: 1.5vw;
    height: auto;
  }
  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-left: 0;
    text-align: center;
    padding-bottom: 8vh;

    h3 {
      font-size: 5vw;
    }
    a,
    span {
      font-size: 3vw;
    }
    .svgRender {
      width: 50vw;
      margin-bottom: 2vh;
    }

    .contact {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .contactIco {
      width: 5vw;
      margin-bottom: 1vw;
    }
    .mediaConteiner img {
      width: 10vw;
      object-fit: cover;
    }
  }
`
