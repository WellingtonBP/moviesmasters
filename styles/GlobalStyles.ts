import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
   :root{
      font-size: 62.5%;
      --background: #2A292C;
      --header: #656971;
   }
   
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   a {
      text-decoration: none;
   }

   ul {
      list-style: none;
   }

   input, button{
      border: none;
      background-color: transparent;
      outline: none;
   }

   body {
      min-height: 100vh;
      background: var(--background);
   }
`;

export default GlobalStyles;
