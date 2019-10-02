import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        background: #F5F5F5;
        font-size: 14px;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font-family: Arial, Helvetica, sans-serif;
    }

    ul {
        list-style: none;
    }
`;