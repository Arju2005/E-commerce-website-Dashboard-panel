import { Outlet } from 'react-router-dom'
import './App.css'
import NavItems from './components/navitems.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <NavItems />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
