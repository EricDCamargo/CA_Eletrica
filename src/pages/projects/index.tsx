import { SVGs } from '@src/assets'
import Dropdown from '@src/components/dropDown'
import ProjectCard from '@src/components/projectCard'
import useWindowSize from '@src/shared/hooks/getWindowSize'
import { ProjectCategory } from '@src/shared/utils/enums'
import { mockProjects } from '@src/shared/utils/mocks'
import { useState } from 'react'
import styled from 'styled-components'

const Projects = () => {
  const { projectsBackGroundIMG } = SVGs
  const { width } = useWindowSize()
  const projectsCategories = Object.values(ProjectCategory)

  const [selectedCategory, setSelectedCategory] = useState<string>('')

  const filteredProjects = selectedCategory
    ? mockProjects.filter(
        project => project.projectData.projectCategory === selectedCategory
      )
    : mockProjects
  return (
    <ProjetosWrapper>
      <ProjectBackground backGroundIMG={projectsBackGroundIMG} />
      {width > 1024 ? (
        <ProjectFilterContainer>
          {projectsCategories.map(category => (
            <FilterButton
              key={category}
              onClick={() => setSelectedCategory(category)}
              active={selectedCategory === category}
            >
              <p className="categoryName">{category}</p>
            </FilterButton>
          ))}
          <FilterButton
            onClick={() => setSelectedCategory('')}
            active={selectedCategory === ''}
          >
            All
          </FilterButton>
        </ProjectFilterContainer>
      ) : (
        <Dropdown
          categories={projectsCategories}
          onCategoryChange={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
      )}
      {filteredProjects.map((project, index) => (
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
const ProjectBackground = styled.section<{ backGroundIMG: string }>`
  display: flex;
  align-items: center;
  background-image: url(${props => props.backGroundIMG});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 60vh;
  width: 100vw;
  position: relative;

  @media (min-width: 0px) and (max-width: 991px) {
    height: 25vh;
  }
`
const ProjectFilterContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const FilterButton = styled.button<{ active: boolean }>`
  background-color: ${props => (props.active ? '#d1d1d1' : '#f2f2f2')};
  border: 1px solid #000;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #e0e0e0;
  }
  .categoryName {
    font-size: 14px;
  }
  @media (max-width: 1150px) {
    .categoryName {
      font-size: 11px;
    }
  }
`
