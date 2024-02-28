import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemesProvider } from './context/theme-context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemesProvider>

      <App />
    </ThemesProvider>

  </React.StrictMode>,
)
