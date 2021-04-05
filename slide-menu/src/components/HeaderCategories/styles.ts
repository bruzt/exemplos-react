import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    height: 50px;

    display: flex;

    background: rgba(0, 0, 255, 0.5);

    button {
        font-size: 0;
        align-self: center;

        background: transparent;
        border: 0;

        padding: 5px;

        cursor: pointer;
    }

    .side-menu-container {
        position: fixed;
        top: 50px;
        left: calc(var(--side-menu-width) * -1);

        width: var(--side-menu-width);
        height: 100vh;

        z-index: 10;

        background: #eee;
        border: 1px solid #111;

        overflow-x: hidden;

        transition: .5s;

        &.open {
            left: 0px;
        }
    }

    .side-menu-container .relative-menu {
        position: relative;
    }
    
    .absolute-menu {
        width: 100%;
        height: 100%;

        position: absolute;

        display: flex;

        transition: 0.5s;
    }
    
    .menu-section {
        width: var(--side-menu-width);

        flex-shrink: 0;
    }

    .menu-section >  div {
        width: 100%;
        height: 50px;

        display: flex;
        justify-content: center;
        align-items: center;

        flex: 1;

        border-bottom: 1px solid #111;

        padding: 0 30px;

        background: rgba(0, 0, 255, 0.1);
    }

    .menu-section div span {
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    
    .menu-section button {
        width: 50%;
        height: 100%;
        
        border: 0;
        border-radius: 0;
        
        font-size: 16px;
        
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .menu-section .back-div {

        background: rgba(255, 0, 0, 0.1);
    }

    .menu-section .back-button {
        width: 100%;

        justify-content: space-between;
    }
`;
