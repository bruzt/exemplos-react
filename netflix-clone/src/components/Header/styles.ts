import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  top: 0px;

  width: 100vw;
  height: 4.375rem;

  z-index: 100;

  padding: 0 2.5rem 0 2rem;

  background-color: transparent;

  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: background-color ease 0.2s;

  &.scroll-down {
    //margin-top: -4.375rem;
    background-color: #111;
  }

  figure {
    position: relative;
  }

  .logo-container {
    width: 9.375rem;
    height: 3.125rem;
  }

  .user-account-container {
    width: 3.125rem;
    height: 3.125rem;
  }
`;
