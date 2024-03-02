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
        <div>{children}</div>
      </Content>
      <Footer />
    </Grid>
  )
}

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: ${colors.black};
  justify-content: space-between;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 24px 5.625%;
`
