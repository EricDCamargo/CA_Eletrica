import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'
import { Template } from '@src/shared/components/layout'
import { AppProvider } from '@src/shared/context'

const Routes = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Template>
          <AppRoutes />
        </Template>
      </AppProvider>
    </BrowserRouter>
  )
}

export default Routes
