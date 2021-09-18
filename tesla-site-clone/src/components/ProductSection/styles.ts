import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;

  scroll-snap-align: start;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .titles {
    position: absolute;
    top: 20%;

    text-align: center;

    transition: opacity ease 2s;

    &.is-not-on-screen {
      opacity: 0;
    }

    &.is-on-screen {
      opacity: 1;
    }
  }

  .titles > * + * {
    margin-top: 0.5rem;
  }

  .titles h1 {
    font-size: 2.5rem;
    font-weight: 600;
    color: #333;
  }

  .titles h2 {
    font-size: 0.875rem;
    font-weight: 400;
    color: #444;
  }

  .buttons {
    position: absolute;
    bottom: 15%;

    display: flex;

    transition: opacity ease 3s;

    &.is-not-on-screen {
      opacity: 0;
    }

    &.is-on-screen {
      opacity: 1;
    }
  }

  .buttons > * {
    width: 15rem;
    height: 2.5rem;

    font-size: 0.875rem;
    font-weight: 600;

    border-radius: 1.25rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .buttons > * + * {
    margin-left: 1rem;
  }

  .buttons .black {
    background: rgba(1, 1, 1, 0.8);
    color: #eee;
  }

  .buttons .white {
    background: rgba(238, 238, 238, 0.8);
    color: #111;
  }
`;
