import React from 'react'
import ReactDOM from 'react-dom/client'
import {GlobalStyle} from '../src/styles/globalstyle.js'
import App from './App.jsx'
import { ThemesProvider } from './context/theme-context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <ThemesProvider>

      <App />
    </ThemesProvider>

  </React.StrictMode>,
)
