import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html, body 
    input, button
    {
        font-size: 16px;
        font-family: Arial, Helvetica, sans-serif;
        background: #eee;
        color: #111;
    }
`;
