import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #eee;
    }

    body, 
    input, 
    textarea, 
    button {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;
    }
`;
