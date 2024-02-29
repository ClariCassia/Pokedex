import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from '../src/styles/globalstyle.js'
import App from './App.jsx'
import { ThemesProvider } from './context/theme-context.jsx'
import Header from '../src/components/Header/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />

    <ThemesProvider>

      <Header/>

      <App />

    </ThemesProvider>

  </React.StrictMode>,
)
