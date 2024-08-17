import { ProjectCategory } from '@src/shared/utils/enums'
import { useState } from 'react'
import styled from 'styled-components'

interface DropdownProps {
  categories: ProjectCategory[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

const Dropdown: React.FC<DropdownProps> = ({
  categories,
  selectedCategory,
  onCategoryChange
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleCategorySelect = (category: string) => {
    onCategoryChange(category)
    setIsOpen(false)
  }

  return (
    <DropdownContainer>
      <DropdownHeader onClick={() => setIsOpen(!isOpen)}>
        {selectedCategory || 'Select Category'}
      </DropdownHeader>
      {isOpen && (
        <DropdownList>
          <DropdownItem onClick={() => handleCategorySelect('')}>
            All
          </DropdownItem>
          {categories.map(category => (
            <DropdownItem
              key={category}
              onClick={() => handleCategorySelect(category)}
            >
              {category}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  )
}

export default Dropdown

const DropdownContainer = styled.div`
  position: relative;
  width: 50vw;

  @media (max-width: 425px) {
    width: 72vw;
  }
`

const DropdownHeader = styled.div`
  background-color: #f2f2f2;
  border: 1px solid #000;
  padding: 10px;
  cursor: pointer;
  text-align: center;
`

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  border: 1px solid #000;
  border-top: none;
  max-height: 200px;
  overflow-y: auto;
  z-index: 10;
`

const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0;
  }
`
