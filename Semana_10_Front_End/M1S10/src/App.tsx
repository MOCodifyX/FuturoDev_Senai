import './App.css'
import { useState } from 'react'

import { PlantStore } from './pages/PlantStore'
import { Button, createTheme, CssBaseline, ThemeProvider } from '@mui/material'


function App() {

//botao de troca de Tema

  const [isDark, setIsDark] = useState(false)

  const theme = createTheme({
    palette: {
      mode: isDark ? 'dark' : 'light',
      background: {
        default: isDark ? '#1a2d22' : '#e7f3ea',
        paper: isDark ? '#12351f' : '#cfe8d5'
      },
      primary: {
        main: isDark ? '#81c784' : '#4f7c5a'
      },
      text: {
        primary: isDark ? '#ffffff' : '#2d3b2e',
        secondary: isDark ? '#a5d6a7' : '#6b8f71'
      }
    }
  });

  return (

    <>

    <ThemeProvider theme={theme}>
      <CssBaseline />

      <div className="p-4 text-center">
        <Button variant="contained" onClick={() => setIsDark(!isDark)}>
          Trocar Tema
        </Button>
      </div>

      <PlantStore />
    </ThemeProvider>

    </>
  )
}

export default App
