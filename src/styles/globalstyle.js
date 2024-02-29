import { createGlobalStyle } from 'styled-components';
import SFFedora from '../assets/fonts/SF Fedora.ttf'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    font-weight: 300;
    box-sizing: border-box;

    @font-face {
      font-family: 'SF Fedora';
      font-weight: 500;  
      src: url(${SFFedora}) format('truetype');
  }
    
  }
  `