import { ProjectCategory } from './enums'

export interface ProjectCardProps {
  projectData: {
    projectId: string
    imageSrc: string
    title: string
    description: string
    status: string
    projectCategory: ProjectCategory
  }
}
