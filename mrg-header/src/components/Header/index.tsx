import { HTMLAttributes, useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaArrowCircleDown } from "react-icons/fa";

import styles from "./styles.module.scss";

interface IProps extends HTMLAttributes<HTMLHeadElement> {}

export function Header(props: IProps) {
  const [isScrolledDown, setScrolledDown] = useState(false);

  const router = useRouter();

  useEffect(() => {
    scrollListener();

    window.addEventListener("scroll", scrollListener);

    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  function scrollListener() {
    if (window.pageYOffset > 50) setScrolledDown(true);
    else setScrolledDown(false);
  }

  function handleAnchorClick(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault();

    const href = event.currentTarget.getAttribute("href");

    if (href) router.push(href);
  }

  function handleArrowDownButtonClick() {
    if (process.browser) window.scrollTo(0, 26.25 * 16); // 31.25rem - 5rem = 26.25
  }

  return (
    <header
      className={`${styles.container} ${
        isScrolledDown ? styles.isScrolled : ""
      }`}
      {...props}
    >
      <video autoPlay muted loop id="myVideo">
        <source src="/mrg.mp4" type="video/mp4" />
      </video>

      <nav className={`${isScrolledDown ? styles.isScrolled : ""}`}>
        <a href="/" onClick={handleAnchorClick}>
          <figure className={`${isScrolledDown ? styles.isScrolled : ""}`}>
            <Image src="/logoMRG.png" layout="fill" alt="logo" />
          </figure>
        </a>

        <ul>
          <li>
            <a
              href="/"
              onClick={handleAnchorClick}
              className={router.asPath == "/" ? styles.active : ""}
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="http://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              YOUTUBE
            </a>
          </li>
          <li>
            <a
              href="/contato"
              onClick={handleAnchorClick}
              className={router.asPath == "/contato" ? styles.active : ""}
            >
              CONTANTO
            </a>
          </li>
        </ul>
      </nav>

      <button
        type="button"
        className={`${isScrolledDown ? styles.isScrolled : ""}`}
        onClick={handleArrowDownButtonClick}
      >
        <FaArrowCircleDown size="2rem" color="inherit" />
      </button>
    </header>
  );
}
