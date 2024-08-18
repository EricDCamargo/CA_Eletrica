import { Navigate, Route, Routes as Routering } from 'react-router-dom'
import Home from '@pages/home'
import Institutional from '@pages/institutional'
import Projects from '@src/pages/projects'
import Clients from '@src/pages/clients'
import News from '@src/pages/news'
import Contact from '@src/pages/contact'

const AppRoutes = () => {
  return (
    <Routering>
      <Route path="*" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/institutional" element={<Institutional />} />
      <Route path="/projects/*" element={<Projects />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/news" element={<News />} />
      <Route path="/contact" element={<Contact />} />
    </Routering>
  )
}

export default AppRoutes
