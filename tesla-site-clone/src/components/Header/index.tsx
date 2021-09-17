import { MouseEvent } from "react";
import Image from "next/image";

import { Container } from "./styles";

interface HeaderProps {}

export function Header({}: HeaderProps) {
  function handleHeaderMenu(
    event: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
    route: string
  ) {
    event.preventDefault();

    console.log(route);
  }

  return (
    <Container>
      <div className="report-container">
        <a href="/report">{"Read Tesla's 2020 Impact Report"}</a>
      </div>

      <div className="header-container">
        <figure>
          <a href="/home" onClick={(event) => handleHeaderMenu(event, "/")}>
            <Image
              src="/logo.svg"
              alt="tesla logo"
              layout="fill"
              objectFit="contain"
            />
          </a>
        </figure>

        <ul>
          <li>
            <a
              href="/model-s"
              onClick={(event) => handleHeaderMenu(event, "/model-s")}
            >
              Model S
            </a>
          </li>
          <li>
            <a
              href="/model-3"
              onClick={(event) => handleHeaderMenu(event, "/model-3")}
            >
              Model 3
            </a>
          </li>
          <li>
            <a
              href="/model-x"
              onClick={(event) => handleHeaderMenu(event, "/model-x")}
            >
              Model X
            </a>
          </li>
          <li>
            <a
              href="/model-y"
              onClick={(event) => handleHeaderMenu(event, "/model-y")}
            >
              Model Y
            </a>
          </li>
          <li>
            <a
              href="/solar"
              onClick={(event) => handleHeaderMenu(event, "/solar-roof")}
            >
              Solar Roof
            </a>
          </li>
          <li>
            <a
              href="/models"
              onClick={(event) => handleHeaderMenu(event, "/solar-panels")}
            >
              Solar Panels
            </a>
          </li>
        </ul>

        <ul>
          <li>
            <a
              href="/shop"
              onClick={(event) => handleHeaderMenu(event, "/shop")}
            >
              Shop
            </a>
          </li>
          <li>
            <a
              href="/accout"
              onClick={(event) => handleHeaderMenu(event, "/accout")}
            >
              Account
            </a>
          </li>
          <li>
            <a
              href="/menu"
              onClick={(event) => handleHeaderMenu(event, "/menu")}
            >
              Menu
            </a>
          </li>
        </ul>
      </div>
    </Container>
  );
}
