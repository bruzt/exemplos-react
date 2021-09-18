import { Container } from "./styles";

export function Footer() {
  return (
    <Container>
      <p>
        Conctruido por Bruno Zutim,{" "}
        <a
          href="http://github.com/bruzt"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/bruzt
        </a>
      </p>
      <p>
        Direitos de imagem são da{" "}
        <a
          href="http://www.tesla.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tesla, Inc.
        </a>
      </p>
    </Container>
  );
}
