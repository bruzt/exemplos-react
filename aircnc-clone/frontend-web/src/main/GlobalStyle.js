import { createGlobalStyle } from 'styled-components';

import backgroundImage from '../assets/img/background.jpg';

export default createGlobalStyle`

    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        min-height: 100%;
    }

    body {
        background: #000 url(${backgroundImage}) no-repeat;
        background-size: cover;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased !important;
    }

    body, input, button {
        font-family: 'Roboto', Arial, Helvetica, sans-serif;
        font-size: 14px;
    }

    ul {
        list-style: none;
    }
`;