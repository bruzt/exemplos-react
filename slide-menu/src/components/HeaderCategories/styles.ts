import styled from "styled-components";

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

    overflow-x: hidden;

    transition: 0.3s;

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

    transition: 0.3s;
  }

  .menu-section {
    width: var(--side-menu-width);

    flex-shrink: 0;
  }

  .menu-section .menu-section-title {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0;
  }

  .menu-section > div {
    width: 100%;
    height: 50px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    flex: 1;

    border-bottom: 1px solid #111;

    padding: 0;

    background: rgba(0, 0, 255, 0.1);
  }

  .menu-section div span,
  .menu-section div a {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
  }

  .menu-section div a {
    cursor: pointer;

    padding-left: 30px;

    &:hover {
      background: rgba(0, 0, 255, 0.1);
    }
  }

  .menu-section button {
    width: 100%;
    height: 100%;

    border-radius: 0;

    font-size: 16px;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .menu-section button.foward-button:hover {
    background: rgba(0, 0, 255, 0.1);
  }

  .menu-section button.foward-button:active {
    background: rgba(0, 0, 255, 0.2);
  }

  .menu-section .back-div {
    background: rgba(255, 0, 0, 0.1);
    padding: 0;
  }

  .menu-section .back-button {
    width: 100%;

    padding: 0 40px 0 30px;

    justify-content: center;

    &:hover {
      background: rgba(255, 0, 0, 0.1);
    }

    &:active {
      background: rgba(255, 0, 0, 0.2);
    }
  }
`;
