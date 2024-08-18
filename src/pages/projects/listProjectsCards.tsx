import ProjectCard from '@src/components/projectCard'
import { ProjectCardProps } from '@src/shared/utils/types'

interface ProjectsCardsListProps {
  filteredProjects: ProjectCardProps[]
}

const ProjectsCardsList = ({ filteredProjects }: ProjectsCardsListProps) => {
  return (
    <>
      {filteredProjects.map((project, index) => (
        <ProjectCard key={index} projectData={project.projectData} />
      ))}
    </>
  )
}
export default ProjectsCardsList
