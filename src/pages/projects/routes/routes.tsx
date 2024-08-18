import { Routes, Route } from 'react-router-dom'
import ProjectsCardsList from '../listProjectsCards'
import { ProjectCardProps } from '@src/shared/utils/types'
import ProjectDetails from '../projectDetails'

interface ProjectsModuleProps {
  filteredProjects: ProjectCardProps[]
}

const ProjectsModule = ({ filteredProjects }: ProjectsModuleProps) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<ProjectsCardsList filteredProjects={filteredProjects} />}
      />
      <Route path=":projectId" element={<ProjectDetails />} />
    </Routes>
  )
}

export default ProjectsModule
