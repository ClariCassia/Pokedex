import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from '../src/styles/globalstyle';
import App from './App';
import { ThemesProvider } from './context/theme-context';
import Header from '../src/components/Header';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />

    <ThemesProvider>
      <Header />
      <App />
    </ThemesProvider>
  </React.StrictMode>
);
