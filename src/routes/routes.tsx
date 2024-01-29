import { Navigate, Route, Routes as Routering } from 'react-router-dom'
import Home from '@pages/home'

const AppRoutes = () => {
  return (
    <Routering>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/" element={<Home />} />
    </Routering>
  )
}

export default AppRoutes
