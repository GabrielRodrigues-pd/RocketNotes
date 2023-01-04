// React
import React from 'react'
import ReactDOM from 'react-dom/client'

// My Context
import { AuthProvider } from './hooks/auth'

// CSS theme - Global - Theme Provider
import theme from './styles/theme'
import GlobalStyles from './styles/global'
import {ThemeProvider} from 'styled-components'

// Routes
import { Routes } from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
