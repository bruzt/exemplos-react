import { MouseEvent } from "react";

import { Container } from "./styles";

interface IProps {
  route: string;
}

export function CarsSubtitle({ route }: IProps) {
  function handleTouchlessDeliveryRouting(
    event: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>
  ) {
    event.preventDefault();

    console.log(route);
  }

  return (
    <Container>
      Order Online for{" "}
      <a href={route} onClick={handleTouchlessDeliveryRouting}>
        Touchless Delivery
      </a>
    </Container>
  );
}
