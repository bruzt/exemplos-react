import styled from 'styled-components';

export const Container = styled.header`
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    
    color: #eee;

    div.limit-width {
        width: 100%;
        max-width: var(--content-max-width);
        height: 100%;

        margin: 0 auto;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    nav.main-nav {
        z-index: 30;
        position: relative;

        height: 125px;
        background: #1e1e26;

        transition: 0.2s;

        &.scroll-down {
            height: 75px;
        }

        &.transition-0 {
            transition: 0s;
        }
    }

    figure.img-container {
        max-height: 100px;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    figure.img-container img {
        max-height: 100px;

        transition: 0.2s;

        &.scroll-down {
            max-height: 50px;
        }

        &.transition-0 {
            transition: 0s;
        }
    }

    div.menu {
        width: 80%;
    }

    ul {
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    li a {
        font-weight: bold;
    }

    form.search-bar {
        width: 300px;
        height: 35px;

        border: 1px solid #eee;
        border-radius: 50px;
        padding: 2px;

        display: flex;
    }

    form.search-bar input,
    form.search-bar button 
    {
        height: 100%;
        background: transparent;
        border: 0;
        padding: 5px;
    }

    form.search-bar input {
        width: 100%;
        padding-left: 10px;

        font-size: 16px;
        outline: 0;

        color: inherit;
    }

    form.search-bar button {
        width: 150px;
        background: #3bb4b4;
        border-radius: 25px;
        cursor: pointer;
        padding: 5px;

        display: flex;
        justify-content: space-evenly;
        align-items: center;

        font-size: 16px;
        font-weight: bold;
        color: inherit;
    }

    nav.secondary-nav {
        z-index: 20;
        background: #14141c;
        height: 65px;

        &.scroll-down {
            animation: hide-secondary-nav 0.2s forwards;
        }

        &.scroll-top {
            animation: show-secondary-nav 0.2s forwards;
        }

        &.animation-none {
            animation-duration: 0s;
        }
    }

    /*@keyframes shrink-main-nav {
        from {
            height: 125px;
        }

        to {
            height: 75px;
        }
    }

    @keyframes stretch-main-nav {
        from {
            height: 75px;
        }

        to {
            height: 125px;
        }
    }*/

    @keyframes hide-secondary-nav {
        from {
            transform: translateY(0);
        }

        to {
            transform: translateY(-65px);
        }
    }

    @keyframes show-secondary-nav {
        from {
            transform: translateY(-65px);
        }

        to {
            transform: translateY(0);
        }
    }
`;
