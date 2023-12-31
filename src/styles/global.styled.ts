import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
*, :after, :before {
    box-sizing: border-box;
    border: 0 solid;
}

html {
  font-size: 62.5%;
}

:root {
  font-family: 'Roboto Mono',monospace,Play,Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  background-color: rgb(4, 8, 16);

  color-scheme: light dark;
  color: rgba(255, 255, 255, 1);

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
  
}
a:hover {
  color: #535bf2;
}

body {
  margin: 0;
  min-height: 100vh;
  position: relative;
}

h1 {
  margin: 0;
  font-size: 3.2em;
  line-height: 1.1;
}

ul, ol {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    input {
        border: none;
        color: inherit;
        width: 100%;
        height: 100%;
        outline: none;
        border-radius: 8px;
        font-size: 16px;
        font-weight: 400;
    }

    /* Typograhy */
    p {
        font-size: 18px;
        margin:0;
    }

    span {
        font-size: 14px;
        margin:0;
    }

    small {
        font-size: 12px;
        margin:0;
    }

   

/* @media (prefers-color-scheme: light) {
  :root {
    color: #fff;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
} */

`;
