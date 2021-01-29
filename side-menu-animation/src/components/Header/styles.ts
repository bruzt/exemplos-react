import styled from 'styled-components';

const sideMenuPanelWidth = '300px';

export const Container = styled.header`

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    
    width: 100%;
    height: 50px;

    background: #111;
    color: #eee;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    /*div.position-relative {
        position: relative;
        
        height: 100%;
    }*/

    button {
        width: 70px;
        height: 100%;

        cursor: pointer;
        border: 0;

        font-size: 20px;
        font-weight: bold;
        background: #ddd;
    }

    div.menu-panel {
        position: absolute;
        top: 50px;
        left: 0;
        z-index: 10;

        width: ${sideMenuPanelWidth};
        height: 100vh;

        background: #ddd;

        display: flex;
        justify-content: center;
        align-items: flex-start;

        padding-top: 50px;

        &.open {
            animation: open-menu 0.5s ease forwards;
        }

        &.close {
            animation: close-menu 0.5s ease forwards;
        }

        &.first-render {
            display: none;
        }
    }

    div.menu-panel ul {
        list-style: none;
        width: 100%;
    }

    ul li {
        background: #ccc;
       
        border-top: 1px solid #222;

        &:hover {
            background: #bbb;
        }
    }
    
    ul li a {
        width: 100%;
        
        font-size: 25px;
        
        text-decoration: none;
        color: #111;
        
        display: flex;
        justify-content: center;
        align-items: center;

        padding: 15px;
    }


    @keyframes open-menu {
        from {
            transform: translateX(-${sideMenuPanelWidth});
        }
        to {
            transform: translateX(0);
        }
    }

    @keyframes close-menu {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-${sideMenuPanelWidth});
        }
    }
`;
