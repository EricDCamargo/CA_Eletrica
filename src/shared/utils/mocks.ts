import { SVGs } from '@src/assets'
import { ProjectCategory } from './enums'

const { eletricProject } = SVGs
export const mockProjects = [
  {
    projectData: {
      imageSrc: eletricProject,
      title: 'Subestação em Alta Tensão',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis itaque ipsa enim esse amet temporibus quo quis quaerat illo recusandae et vel ut fugit quam sit, reiciendis accusantium, quos aspernatur.',
      link: '',
      projectCategory: ProjectCategory.AGRICULTURAL
    }
  },
  {
    projectData: {
      imageSrc: eletricProject,
      title: 'Subestação em Alta Tensão',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis itaque ipsa enim esse amet temporibus quo quis quaerat illo recusandae et vel ut fugit quam sit, reiciendis accusantium, quos aspernatur.',
      link: '',
      projectCategory: ProjectCategory.HEALTHCARE
    }
  }
]
