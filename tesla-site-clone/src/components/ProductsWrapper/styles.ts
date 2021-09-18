import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;

  overflow-y: scroll;
  overflow-x: hidden;

  scroll-snap-type: y mandatory;

  .arrow-down {
    position: fixed;
    bottom: 5%;
    left: 48.7%;

    z-index: 90;

    display: none;

    animation: up-and-down 1s ease infinite;

    &.on-top {
      display: block;
    }
  }

  @keyframes up-and-down {
    0% {
      transform: translateY(-0.2rem);
    }

    50% {
      transform: translateY(0.2rem);
    }

    100% {
      transform: translateY(-0.2rem);
    }
  }
`;
