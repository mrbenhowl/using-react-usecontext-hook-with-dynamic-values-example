import { createGlobalStyle } from 'styled-components'
import Roboto from '../../assets/fonts/roboto/robotoLight.ttf'
import Ubuntu from '../../assets/fonts/ubuntu/ubuntuMedium.ttf'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Ubuntu';
    src: url(${Ubuntu});
  }  
  @font-face {
    font-family: 'Roboto';
    src: url(${Roboto});
  }
  body {
    margin: 0;        
    padding: 0;        
    background-color: #fff;  
    color: #000;
  }  
  button {
    font-family: 'Roboto', sans-serif;
    font-size: 1.5em;
    background-color: transparent;
    border: 2px solid #fff;
    color: #fff;
    padding: 10px;
    width: 100%;
    @media (min-width: 500px) {
      width: 400px;
    }
  }
`

export default GlobalStyle
