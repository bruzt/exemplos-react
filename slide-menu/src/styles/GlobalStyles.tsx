import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    :root {
        --side-menu-width: 250px;
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: #555;
        font-family: Arial, Helvetica, sans-serif;
    }
`;
