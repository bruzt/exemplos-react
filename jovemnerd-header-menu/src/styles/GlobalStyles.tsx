import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    :root {
        --content-max-width: 1200px;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        height: 100%;
        background: #eee;
    }

    html, body,
    input, button {
        font-family: Inter, Arial, Helvetica, sans-serif;
        font-size: 16px;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;
