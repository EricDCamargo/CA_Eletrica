import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'
import { Template } from '@src/shared/components/layout'

const Routes = () => {
  return (
    <BrowserRouter>
      <Template>
        <AppRoutes />
      </Template>
    </BrowserRouter>
  )
}

export default Routes
