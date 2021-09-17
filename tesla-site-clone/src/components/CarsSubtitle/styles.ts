import styled from "styled-components";

export const Container = styled.h2`
  font-size: 0.875rem;
  font-weight: 400;
  color: #444;

  a {
    border-bottom: 1px solid rgba(4, 4, 4, 0.5);

    transition: border-bottom ease 0.5s;

    &:hover {
      border-bottom: 2px solid rgba(1, 1, 1, 0.5);
    }
  }
`;
