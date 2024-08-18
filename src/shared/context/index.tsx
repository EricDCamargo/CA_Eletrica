import React, { createContext, useContext, ReactNode } from 'react'
import { ProjectCardProps } from '../utils/types'
import { mockProjects } from '../utils/mocks'

type AppContextType = {
  projects: ProjectCardProps[]
}

type AppProviderProps = {
  children: ReactNode
}

type AppContextValue = AppContextType & {
  children: React.ReactNode
}

const AppContext = createContext<AppContextType>({} as AppContextType)

const useAppContext = () => {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const projects = mockProjects

  const contextValues: AppContextType = {
    projects
  }

  const contextDefaultValue: AppContextValue = {
    ...contextValues,
    children
  }

  return (
    <AppContext.Provider value={contextDefaultValue}>
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider, useAppContext }
