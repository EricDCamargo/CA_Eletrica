import { SVGs } from '@src/assets'
import ProjectCard from '@src/components/projectCard'
import styled from 'styled-components'

const { eletricProject } = SVGs

const mockProjects = [
  {
    projectData: {
      imageSrc: eletricProject,
      title: 'Subestação em Alta Tensão',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis itaque ipsa enim esse amet temporibus quo quis quaerat illo recusandae et vel ut fugit quam sit, reiciendis accusantium, quos aspernatur.',
      link: ''
    }
  },
  {
    projectData: {
      imageSrc: eletricProject,
      title: 'Subestação em Alta Tensão',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis itaque ipsa enim esse amet temporibus quo quis quaerat illo recusandae et vel ut fugit quam sit, reiciendis accusantium, quos aspernatur.',
      link: ''
    }
  }
]

const Projects = () => {
  return (
    <ProjetosWrapper>
      {mockProjects.map((project, index) => (
        <ProjectCard key={index} projectData={project.projectData} />
      ))}
    </ProjetosWrapper>
  )
}

export default Projects

const ProjetosWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
`
