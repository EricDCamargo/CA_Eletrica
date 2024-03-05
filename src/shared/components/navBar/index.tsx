import { colors } from '@src/shared/themes/colors'
import { changeAppLanguage } from '@shared/utils/functions'
import styled from 'styled-components'
import { SVGs } from '@assets/index'
import { useTranslation } from 'react-i18next'
import { SiWhatsapp, SiGmail } from 'react-icons/si'
import { SvgRender } from '../svgRender'
import { useLocation, useNavigate } from 'react-router-dom'

export const NavBar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { pathname } = location
  const { brazil, usa, newLogo } = SVGs
  const gmail = 'ericdcamargo@gmail.com'

  const handleGmailIconClick = async () => {
    return (window.location.href = `mailto:${gmail}`)
  }

  const { i18n, t } = useTranslation()

  return (
    <Container>
      <Logo onClick={() => navigate('/home')}>
        <SvgRender src={newLogo} />
      </Logo>
      <Sections>
        <Section
          onClick={() => navigate('/home')}
          active={pathname.includes('/home')}
        >
          {t('home:home')}
        </Section>
        <Section
          onClick={() => navigate('/institutional')}
          active={pathname.includes('/institutional')}
        >
          {t('home:institutional')}
        </Section>
        <Section
          onClick={() => navigate('/projects')}
          active={pathname.includes('/projects')}
        >
          {t('home:projects')}
        </Section>
        <Section
          onClick={() => navigate('/clients')}
          active={pathname.includes('/clients')}
        >
          {t('home:clients')}
        </Section>
        <Section
          onClick={() => navigate('/news')}
          active={pathname.includes('/news')}
        >
          {t('home:news')}
        </Section>
        <Section
          onClick={() => navigate('/contact')}
          active={pathname.includes('/contact')}
        >
          {t('home:contact')}
        </Section>
      </Sections>
      <Links>
        <Icons>
          <a href="https://contate.me/eric-camargo" target="_blank">
            <SiWhatsapp size={22} className="icon iconWpp" />
          </a>
          <SiGmail
            onClick={handleGmailIconClick}
            className="icon iconGmail"
            size={22}
          />
          <a
            href="https://www.linkedin.com/in/ericdellaicamargo/"
            target="_blank"
          ></a>
          <img
            onClick={() => {
              i18n.changeLanguage('ptBR')
              changeAppLanguage('ptBR')
            }}
            className="flag icon"
            src={brazil}
            alt="Brazil Flag"
          />
          <img
            onClick={() => {
              i18n.changeLanguage('en')
              changeAppLanguage('en')
            }}
            className="flag icon"
            src={usa}
            alt="USA Flag"
          />
        </Icons>
      </Links>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-area: NB;
  background-color: ${colors.black};
  z-index: 2;
  display: flex;
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
const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: fit-content;
  cursor: pointer;
`
const Sections = styled.div`
  display: flex;
  column-gap: 20px;
  align-items: center;
  font-family: 'Dosis', sans-serif;
  :hover {
    color: ${colors.black};
    background-color: ${colors.white};
    transform: scale(1.2);
    box-shadow: 0px 0px 10px 0px white;
  }
  @media (max-width: 999px) {
    display: none;
  }
`
const Section = styled.a<{ active: boolean }>`
  text-decoration: none;
  color: ${props => (props.active ? `${colors.yellow}` : `${colors.white}`)};
  transition: 0.5s;
  height: 50px;
  width: 100px;
  border-radius: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.black};
  cursor: pointer;

  @media (max-width: 1000px) {
    font-size: 22px;
  }
  @media (max-width: 1100px) {
    width: 100%;
  }
`
const Links = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
  height: 100%;
  @media (max-width: 999px) {
    display: none;
  }
`
const Icons = styled.div`
  display: flex;
  column-gap: 15px;
  display: flex;

  .flag {
    cursor: pointer;
    width: 32px;
    height: 32px;
  }
  .icon {
    color: ${colors.white};
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      transform: scale(1.1);
    }
  }
  .iconWpp {
    &:hover {
      color: ${colors.wppColor};
    }
  }

  .iconGmail {
    &:hover {
      color: ${colors.gmail};
    }
  }
`
