import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');

  body, input {
    font-family: 'Poppins', sans-serif;
    background-color: #F4ECE1;
  }

  input:focus {
    outline: none;
  }

  .t-body {
    overflow: overlay !important;
  }

  ::-webkit-scrollbar {
    cursor:grab !important;
    width: 20px;
    background-color: transparent;
  }
  
  ::-webkit-scrollbar {
    cursor:grab !important;
  }

  ::-webkit-scrollbar-thumb {
    cursor:grab !important;
    background-color: rgb(0 0 0 / 50%);
    border-radius: 10px;
    border: 6px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
  }
`;

export default GlobalStyles;