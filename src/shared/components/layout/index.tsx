import { colors } from '@src/shared/themes/colors'
import { ReactNode } from 'react'
import styled from 'styled-components'
import { NavBar } from '../navBar'
import { Footer } from '../footer/index'

type TemplateProps = {
  children: ReactNode
}

export const Template = ({ children }: TemplateProps) => {
  return (
    <Grid>
      <NavBar />
      <Content>
        <div className="mainContent">{children}</div>
        <Footer />
      </Content>
    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  background-color: ${colors.black};
  grid-template-columns: 100%;
  grid-template-rows: 118px auto;
  grid-template-areas:
    'NB'
    'CT';
  @media (max-width: 1000px) {
    height: auto;

    grid-template-areas:
      'NB NB'
      'CT CT';
  }
  min-height: 100vh;
  height: 100vh;
`

const Content = styled.div`
  grid-area: CT;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-auto-flow: row;
  grid-auto-rows: 25%;
  grid-template-rows: unset;
  overflow: auto;
  grid-template-columns: unset;
  .mainContent {
    padding: 24px 5.625%;
  }
`
