import Image from "next/image";

import { Container } from "./styles";

function LoadingModal() {
  return (
    <Container>
      <figure>
        <Image
          src="/netflix-loading.gif"
          alt="Carregando"
          layout="fill"
          objectFit="cover"
        />
      </figure>
    </Container>
  );
}

export default LoadingModal;
