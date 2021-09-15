import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;

  .vertical-transparency {
    width: inherit;
    height: inherit;

    background: linear-gradient(to top, rgba(1, 1, 1, 0.9) 10%, transparent);
  }

  .horizontal-transparency {
    width: inherit;
    height: inherit;

    background: linear-gradient(to right, rgba(1, 1, 1, 0.9) 30%, transparent);

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 4.375rem 0 9.375rem 1.875rem;
  }

  .name {
    font-size: 3.75rem;
    font-weight: bold;
  }

  .info {
    display: flex;

    margin-top: 0.9375rem;

    font-size: 1.125rem;
    font-weight: bold;
  }

  .info > * {
    font-weight: bold;
    margin-right: 0.9375rem;
  }

  .info .points {
    color: #46d369;
  }

  .description {
    max-width: 40%;

    margin-top: 0.9375rem;

    text-align: justify;
    font-size: 1.25rem;
    color: #999;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 7; /* number of lines to show */
    -webkit-box-orient: vertical;
  }

  .buttons {
    margin-top: 0.9375rem;

    display: flex;
  }

  .buttons > * {
    margin-right: 0.9375rem;
  }

  .buttons .button {
    padding: 0.9375rem 1.5625rem;

    border-radius: 4px;

    font-size: 1.25rem;
    font-weight: bold;

    transition: filter ease 0.2s;

    &:hover {
      filter: brightness(1.1);
    }

    &:active {
      filter: brightness(1.2);
    }
  }

  .buttons .play-button {
    background: #eee;
    color: #111;
  }

  .buttons .add-list-button {
    background: #333;
  }

  .genres {
    margin-top: 0.9375rem;
  }

  @media (max-width: 1024px) {
    .description {
      max-width: 80%;
    }
  }

  @media (max-width: 768px) {
    /*.button.name {
      font-size: 3rem;
    }*/

    .description {
      max-width: 90%;
    }
  }
`;
