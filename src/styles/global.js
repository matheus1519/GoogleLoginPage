import { createGlobalStyle } from 'styled-components';
import colors from './theme';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
  * {
    margin: 0;
    padding: 0;
    border:0;
    outline:0;
    box-sizing: border-box;
    -webkit-font-smothing: antialiased !important;
  }
  body, input, textarea, select, button {
    font-family: Roboto,'Noto Sans Myanmar UI',arial,sans-serif;
  }
  html,body,#root {
    width:100%;
    height:100%;
  }
  #root{
    display:flex;
    align-items:center;
    justify-content:center;
  }
  h1,h2,h3,h4,h5,h6, button{
    font-family: 'Open Sans', sans-serif;
  }


  button{
    background:none;
    border-radius:4px;
    font-weight: bold;
    height:36px;
    transition: .2s;
  }
  button:hover{
    cursor:pointer;
  }

  a{
    text-decoration:none;
    cursor:pointer;
  }

  a:active, .btn-secondary:active{
    background:#92BDF4;
  }

  .btn-primary{
    background: ${colors.primary};
    color: ${colors.background};
    padding: 8px 16px;
  }

  .btn-primary:hover{
    background: #287ae6;
    box-shadow: 0 1px 1px 0 rgba(66,133,244,0.45), 0 1px 3px 1px rgba(66,133,244,0.3);
  }

  .btn-primary:active{
    background: #1763c6;
  }

  .btn-secondary{
    padding: 8px;
    color: ${colors.primary};
  }

`;
