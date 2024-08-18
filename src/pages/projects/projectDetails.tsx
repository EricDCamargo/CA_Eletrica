import { useAppContext } from '@src/shared/context'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const ProjectDetails = () => {
  const { projects } = useAppContext()

  const { projectId } = useParams<{ projectId: string }>()
  const project = projects.find(p => p.projectData.projectId === projectId)

  if (!project) {
    return <p>Project not found</p>
  }

  const { imageSrc, title, description, status, projectCategory } =
    project?.projectData

  return (
    <SectionWrapper>
      <Banner>
        <ImgBanner>
          <SwiperContainer>
            <SwiperWrapper>
              <SwiperSlide src={imageSrc} />
            </SwiperWrapper>
            <PaginationSwiperNext />
            <PaginationSwiperPrev />
          </SwiperContainer>
        </ImgBanner>
      </Banner>
      <Infos>
        <TituloObra>{title}</TituloObra>
        <DescricaoObra>{description}</DescricaoObra>
        <DescricaoUp>
          Status:<span className="espacamento"> </span> {status}
        </DescricaoUp>
        <DescricaoDown>
          Categorias:<span className="espacamento"></span> {projectCategory}
        </DescricaoDown>
        <RedesSociais></RedesSociais>
      </Infos>
    </SectionWrapper>
  )
}

export default ProjectDetails

const SectionWrapper = styled.section`
  display: flex;
  width: 100vw;
  background-color: #ebebeb;
  padding: 0;

  @media (max-width: 991px) {
    margin-top: 20vw;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const Banner = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 991px) {
    width: 80%;
  }
`

const ImgBanner = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 991px) {
    width: 80vw;
    height: 60vw;
  }
`

const SwiperContainer = styled.div`
  width: 100%;
  height: 100%;
`

const SwiperWrapper = styled.div`
  height: 531px;
`

const SwiperSlide = styled.img`
  width: 100%;
  background-size: cover;
`

const PaginationSwiperNext = styled.div`
  display: none;
`

const PaginationSwiperPrev = styled.div`
  display: none;
`

const Infos = styled.div`
  display: flex;
  width: 50%;
  padding: 5vh 8.3333333333%;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 991px) {
    width: 80%;
    text-align: center;
  }
`

const TituloObra = styled.h2`
  font-family: 'Work Sans', sans-serif;
  font-weight: 800;
  font-size: 2vw;
  line-height: 2.1vw;
  color: #23242b;

  @media (max-width: 991px) {
    font-size: 4vw;
    line-height: 5vw;
    text-align: center;
  }
`

const DescricaoObra = styled.p`
  display: flex;
  padding-right: 8.3333333333%;
  margin: 8vh 0;
  font-family: 'Work Sans', sans-serif;
  font-weight: 300;
  font-size: 1.5vw;
  line-height: 1.6vw;
  color: #494949;

  @media (max-width: 991px) {
    font-size: 3vw;
    line-height: 4vw;
    text-align: center;
  }
`

const DescricaoUp = styled.p`
  font-family: 'Work Sans', sans-serif;
  font-weight: 300;
  font-size: 1.5vw;
  line-height: 1.6vw;
  color: #707070;
  border-top: 2px solid #c2c2c2;
  border-bottom: 2px solid #c2c2c2;
  padding: 1vw 0;
  display: flex;
  justify-content: space-between;

  @media (max-width: 991px) {
    font-size: 3vw;
    line-height: 4vw;
  }
`

const DescricaoDown = styled(DescricaoUp)`
  border-top: none;
`

const RedesSociais = styled.div`
  display: flex;
  margin-top: 4vh;
  width: 31.6666666667%;
  justify-content: space-between;

  @media (max-width: 991px) {
    width: 100%;
    justify-content: space-around;
  }
`
