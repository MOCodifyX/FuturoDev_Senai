import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

import Navbar from './components/organisms/Navbar'
import HomePage from './pages/HomePage'
import FilmsPage from './pages/FilmsPage'
import SynopsisPage from './pages/SynopsisPage'
import ContactPage from './pages/ContactPage'


function App() {


  return (
    <>

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/films" element={<FilmsPage />} />
        <Route path="/synopsis" element={<SynopsisPage/>} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path='/redirect' element={<Navigate to='HomePage' />} />

      </Routes>

    </>
  )
}

export default App
