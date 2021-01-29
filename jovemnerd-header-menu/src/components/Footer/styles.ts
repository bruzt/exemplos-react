import styled from 'styled-components';

export const Container = styled.footer`
    width: 100%;
    height: 550px;

    background: #1e1e26;

    div.limit-center {
        width: 100%;
        max-width: var(--content-max-width);
        margin: 0 auto;
    }

    div.site-map {
        padding-top: 50px;

        display: flex;
        justify-content: space-between;
    }

    div.site-map div.item {
        height: 100%;
    }

    div.item h3 {
        color: #3bb4b4;
        font-size: 22px;

        margin-bottom: 20px;
    }

    ul {
        list-style: none;
        color: #eee;
    }

    ul li {
        padding: 5px 0;
        font-size: 18px;
    }

    div.footer-info {
        display: flex;
    }

    div.bug-link-and-copyrights {
        width: 75%;
    }

    div.bug-link-and-copyrights a {
        background: #b4b4b4;
        color: #1e1e26;

        padding: 5px 15px;
        font-weight: bold;
        font-size: 14px;
        border-radius: 15px;
    }

    div.bug-link-and-copyrights div.copyrights {
        margin-top: 50px;
        color: #b4b4b4;
    }

    div.footer-info div.developer {
        width: 25%;

        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
    }
`;
