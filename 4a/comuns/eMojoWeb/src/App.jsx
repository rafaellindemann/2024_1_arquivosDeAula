import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { GlobalContextProvider } from './contexts/GlobalContext'

function App() {

  return (
    <GlobalContextProvider>
      <div className="linha">
        <Navbar />
        <Outlet />

      </div>
      <Footer />
    </GlobalContextProvider>
  )
}

export default App