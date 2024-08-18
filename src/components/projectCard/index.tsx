
import { colors } from '@src/shared/themes/colors'
import { ProjectCardProps } from '@src/shared/utils/types'
import { FaCircleArrowRight } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'

const ProjectCard = ({ projectData }: ProjectCardProps) => {
  const { projectId, imageSrc, title, description } = projectData
  const navigate = useNavigate()

  const handleMoreInfo = (id: string) => {
    navigate(`/projects/${id}`)
  }
  return (
    <ProjetosSection>
      <ProjectImage src={imageSrc} alt="Projeto" />
      <Intro>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <VerMaisLink onClick={() => handleMoreInfo(projectId)}>
          Ver mais
          <Icon>
            <FaCircleArrowRight size={22} />
          </Icon>
        </VerMaisLink>
      </Intro>
    </ProjetosSection>
  )
}

export default ProjectCard

const ProjetosSection = styled.section`
  display: flex;
  align-items: center;
  width: 72vw;
  overflow: hidden;
  background-color: ${colors.white};
  flex-direction: row;
  max-height: 28vw;

  @media (max-width: 991px) {
    max-height: 100%;
    flex-direction: column;
    gap: 30px;
  }
`

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;

  @media (min-width: 991px) {
    width: 40vw;
  }
`

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 991px) {
    width: 100%;
    padding: 5vw 0;
  }
`

const Title = styled.h2`
  font-family: 'Work Sans', sans-serif;
  font-weight: 800;
  font-size: 1.3vw;
  text-align: left;
  color: ${colors.black};
  padding: 0 3vw;
  width: 100%;

  @media (max-width: 991px) {
    text-align: center;
    font-size: 6vw;
  }
`

const Description = styled.h3`
  margin: 4vh 0;
  font-family: 'Work Sans';
  font-size: 1.3vw;
  color: ${colors.black};
  text-align: left;
  padding: 0 3vw;

  @media (max-width: 991px) {
    text-align: center;
    font-size: 3vw;
  }
`

const VerMaisLink = styled.a`
  margin: 0 3vw;
  text-decoration: none;
  color: ${colors.black};
  border: 1px solid ${colors.black};
  width: 10vw;
  height: 8vh;
  min-width: fit-content;
  font-size: 1.1rem;
  border-radius: 40px;
  display: flex;
  align-items: center;
  padding: 1vw;
  transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

  @media (max-width: 991px) {
    width: initial;
    margin: 0 auto;
    padding: 3vw 9vw;
  }
`

const Icon = styled.i`
  margin-left: 0.5vw;
  transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

  ${VerMaisLink}:hover & {
    margin-left: 0.8vw;
  }
`
