import { Container } from "./styles";

interface FooterProps {}

function Footer({}: FooterProps) {
  return (
    <Container>
      <p>Feito por Bruno Zutim</p>
      <p>Direitos de imagem da Netflix</p>
      <p>
        Dados dos filmes pegos da API do{" "}
        <a
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          themoviedb.org
        </a>
      </p>
    </Container>
  );
}

export default Footer;
