import { Routes, Route, Navigate } from 'react-router-dom'
import { useContext, useEffect } from "react";
import './App.css'

import Navbar from './components/organisms/Navbar'
import HomePage from './pages/HomePage'
import FilmsPage from './pages/FilmsPage'
import SynopsisPage from './pages/SynopsisPage'
import ContactPage from './pages/ContactPage'

import { ThemeContext } from './context/ThemeContext'


function App() {
  const { theme } = useContext(ThemeContext);

    useEffect(() => {
    document.body.className = ''; 
    document.body.classList.add(theme === 'light' ? 'light-theme' : 'dark-theme');
  }, [theme]);

  return (
    <>

    <div className={theme === 'light' ? 'light-theme' : 'dark-theme'}>

   
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/films" element={<FilmsPage />} />
          <Route path="/synopsis" element={<SynopsisPage/>} />
          <Route path="/contact" element={<ContactPage />} />

          <Route path='/redirect' element={<Navigate to='HomePage' />} />

        </Routes>

  </div>

  </>
  )
}

export default App
