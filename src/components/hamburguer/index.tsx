import { SVGs } from '@src/assets'
import { colors } from '@src/shared/themes/colors'
import { changeAppLanguage } from '@src/shared/utils/functions'
import { Dispatch, SetStateAction } from 'react'
import { useTranslation } from 'react-i18next'
import { SiGmail, SiLinkedin, SiWhatsapp } from 'react-icons/si'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

interface Props {
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>
}

export const Hamburguer = ({ setIsMenuOpen }: Props) => {
  const navigate = useNavigate()
  const gmail = 'ericdcamargo@gmail.com'
  const handleGmailIconClick = async () => {
    return (window.location.href = `mailto:${gmail}`)
  }

  const { t, i18n } = useTranslation()

  const { brazil, usa } = SVGs
  return (
    <HamburguerItems>
      <HamburguerDetail />
      <Section
        onClick={() => {
          navigate('/home')
          setIsMenuOpen(false)
        }}
      >
        {t('home:home')}
      </Section>
      <Section
        onClick={() => {
          navigate('/institutional')
          setIsMenuOpen(false)
        }}
      >
        {t('home:institutional')}
      </Section>
      <Section
        onClick={() => {
          navigate('/projects')
          setIsMenuOpen(false)
        }}
      >
        {t('home:projects')}
      </Section>
      <Section
        onClick={() => {
          navigate('/clients')
          setIsMenuOpen(false)
        }}
      >
        {t('home:clients')}
      </Section>
      <Section
        onClick={() => {
          navigate('/news')
          setIsMenuOpen(false)
        }}
      >
        {t('home:news')}
      </Section>
      <Section
        onClick={() => {
          navigate('/contact')
          setIsMenuOpen(false)
        }}
      >
        {t('home:contact')}
      </Section>

      <Icons>
        <a href="https://contate.me/eric-camargo" target="_blank">
          <SiWhatsapp size={18} className="icon iconWpp" />
        </a>
        <a
          href="https://www.linkedin.com/in/ericdellaicamargo/"
          target="_blank"
        >
          <SiLinkedin size={18} className="icon iconLinkedin" />
        </a>
        <SiGmail
          size={18}
          className="icon iconGmail"
          onClick={handleGmailIconClick}
        />
      </Icons>
      <Icons>
        <img
          onClick={() => {
            i18n.changeLanguage('pt-BR')
            changeAppLanguage('pt-BR')
          }}
          className="languageSelector"
          src={brazil}
          alt="Brazil Flag"
        />
        <hr />
        <img
          onClick={() => {
            i18n.changeLanguage('en')
            changeAppLanguage('en')
          }}
          className="languageSelector"
          src={usa}
          alt="USA Flag"
        />
      </Icons>
    </HamburguerItems>
  )
}

const Section = styled.a`
  text-decoration: none;
  color: ${colors.white};
  transition: 0.5s;
  cursor: pointer;

  :hover {
    color: ${colors.linkedin};
    transform: scale(1.1);
  }

  @media (max-width: 1000px) {
    font-size: 22px;
  }
`

const HamburguerItems = styled.div`
  transition: 1s;
  position: absolute;
  right: 30px;
  top: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${colors.white};
  border-radius: 4px;
  flex-direction: column;
  width: auto;
  padding: 15px 10px;
  row-gap: 10px;
  background-color: ${colors.black};
`

const HamburguerDetail = styled.div`
  position: absolute;
  top: -10px;
  right: -0px;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid ${colors.white};
`

const Icons = styled.div`
  display: flex;
  column-gap: 15px;

  .languageSelector {
    cursor: pointer;
    width: 30px;
    height: 20px;
  }

  .icon {
    color: ${colors.white};
    transition: 0.5s;
    cursor: pointer;
    :hover {
      transform: scale(1.1);
    }
  }

  .iconWpp {
    :hover {
      color: ${colors.wppColor};
    }
  }
  .iconLinkedin {
    :hover {
      color: ${colors.linkedin};
    }
  }

  .iconGmail {
    :hover {
      color: ${colors.gmail};
    }
  }
`
