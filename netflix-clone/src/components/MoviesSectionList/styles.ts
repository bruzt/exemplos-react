import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 1.875rem;

  h2 {
    margin-left: 3rem;
  }

  .list-area {
    position: relative;

    overflow-x: hidden;

    padding-left: 3rem;
  }

  .list-area .arrow-container {
    position: absolute;

    width: 3rem;
    height: 14.0625rem;

    z-index: 10;

    display: flex;
    justify-content: center;
    align-items: center;

    opacity: 0;

    background: rgba(1, 1, 1, 0.5);

    transition: opacity ease 0.2s;
  }

  .list-area:hover .arrow-container {
    opacity: 1;
  }

  .list-area .arrow-left {
    left: 0;
    top: 0;
    bottom: 0;
  }

  .list-area .arrow-right {
    right: 0;
    top: 0;
    bottom: 0;
  }

  .arrow-container button {
    width: 100%;
    height: 100%;

    background: transparent;
    border: 0;

    font-size: 0;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .list {
    transition: margin-left ease 0.3s;
  }

  .list .item {
    width: 9.375rem;
    height: 14.0625rem;

    position: relative;
    display: inline-block;

    cursor: pointer;
  }

  .item img {
    transform: scale(0.9);

    transition: transform ease 0.2s;

    &:hover {
      transform: scale(1);
    }
  }

  @media (max-width: 768px) {
    .list-area .arrow-container {
      opacity: 1;
    }
  }
`;
