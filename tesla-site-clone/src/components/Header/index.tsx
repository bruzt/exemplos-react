import { MouseEvent } from "react";
import Image from "next/image";

import { Container } from "./styles";

interface HeaderProps {}

export function Header({}: HeaderProps) {
  function handleHeaderNavigation(
    event: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
    route: string
  ) {
    event.preventDefault();

    console.log(route);
  }

  return (
    <Container>
      <div className="report-container">
        <a
          href="/report"
          onClick={(event) => handleHeaderNavigation(event, "/report")}
        >
          {"Read Tesla's 2020 Impact Report"}
        </a>
      </div>

      <div className="header-container">
        <figure>
          <a
            href="/home"
            onClick={(event) => handleHeaderNavigation(event, "/")}
          >
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
              onClick={(event) => handleHeaderNavigation(event, "/model-s")}
            >
              Model S
            </a>
          </li>
          <li>
            <a
              href="/model-3"
              onClick={(event) => handleHeaderNavigation(event, "/model-3")}
            >
              Model 3
            </a>
          </li>
          <li>
            <a
              href="/model-x"
              onClick={(event) => handleHeaderNavigation(event, "/model-x")}
            >
              Model X
            </a>
          </li>
          <li>
            <a
              href="/model-y"
              onClick={(event) => handleHeaderNavigation(event, "/model-y")}
            >
              Model Y
            </a>
          </li>
          <li>
            <a
              href="/solar-roof"
              onClick={(event) => handleHeaderNavigation(event, "/solar-roof")}
            >
              Solar Roof
            </a>
          </li>
          <li>
            <a
              href="/solar-panels"
              onClick={(event) =>
                handleHeaderNavigation(event, "/solar-panels")
              }
            >
              Solar Panels
            </a>
          </li>
        </ul>

        <ul>
          <li>
            <a
              href="/shop"
              onClick={(event) => handleHeaderNavigation(event, "/shop")}
            >
              Shop
            </a>
          </li>
          <li>
            <a
              href="/account"
              onClick={(event) => handleHeaderNavigation(event, "/account")}
            >
              Account
            </a>
          </li>
          <li>
            <a
              href="/menu"
              onClick={(event) => handleHeaderNavigation(event, "/menu")}
            >
              Menu
            </a>
          </li>
        </ul>
      </div>
    </Container>
  );
}
