import { SVGs } from '@src/assets'
import { ProjectCategory, ProjectStatus } from './enums'
import { ProjectCardProps } from './types'

const { eletricProject } = SVGs
export const mockProjects: ProjectCardProps[] = [
  {
    projectData: {
      projectId: '1',
      imageSrc: eletricProject,
      title: 'Subestação em Alta Tensão',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis itaque ipsa enim esse amet temporibus quo quis quaerat illo recusandae et vel ut fugit quam sit, reiciendis accusantium, quos aspernatur.',
      status: ProjectStatus.COMPLETED,
      projectCategory: ProjectCategory.AGRICULTURAL
    }
  },
  {
    projectData: {
      projectId: '2',
      imageSrc: eletricProject,
      title: 'Subestação em Alta Tensão',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis itaque ipsa enim esse amet temporibus quo quis quaerat illo recusandae et vel ut fugit quam sit, reiciendis accusantium, quos aspernatur.',
      status: ProjectStatus.IN_PROGRESS,
      projectCategory: ProjectCategory.HEALTHCARE
    }
  }
]
