import { useEffect, useState, MouseEvent } from "react";
import Image from "next/image";

import { Container } from "./styles";

interface HeaderProps {}

function Header({}: HeaderProps) {
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    if (process.browser) {
      window.addEventListener("scroll", scrollListener);

      return () => window.removeEventListener("scroll", scrollListener);
    }
  }, []);

  function scrollListener() {
    if (window.scrollY > 50) setIsScrolledDown(true);
    else setIsScrolledDown(false);
  }

  function handleLogoClick(
    event: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>
  ) {
    event.preventDefault();
  }

  function handleAccountClick(
    event: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>
  ) {
    event.preventDefault();
  }

  return (
    <Container className={isScrolledDown ? "scroll-down" : ""}>
      <figure className="logo-container" title="Home">
        <a href="/home" onClick={handleLogoClick}>
          <Image
            src="/netflix-logo.svg"
            alt="logo netflix"
            layout="fill"
            objectFit="contain"
          />
        </a>
      </figure>
      <a href="/account" onClick={handleAccountClick}>
        <figure className="user-account-container" title="Conta do usuário">
          <Image
            src="/user-logo.png"
            alt="conta do usuário"
            layout="fill"
            objectFit="contain"
          />
        </figure>
      </a>
    </Container>
  );
}

export default Header;
