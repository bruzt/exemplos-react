import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  top: 0;

  z-index: 100;

  width: 100%;

  .report-container {
    height: 3.3rem;

    background-color: rgba(255, 255, 255, 0.95);
    color: #111;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .report-container a {
    line-height: 1.1rem;
    font-size: 0.875rem;
    border-bottom: 1px solid #111;

    &:hover {
      border-bottom: 2px solid #111;
    }
  }

  .header-container {
    padding: 0.8rem 2rem;

    background: transparent;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-container figure {
    position: relative;
    width: 7.5rem;
    height: 1.875rem;

    margin-left: 1rem;
  }

  .header-container ul {
    display: flex;
    list-style: none;
  }

  li a {
    font-size: 0.875rem;
    font-weight: 600;

    padding: 0.5rem 1rem;
    border-radius: 1rem;

    transition: background-color ease 0.5s;

    &:hover {
      background: rgba(9, 9, 9, 0.05);
    }
  }
`;
