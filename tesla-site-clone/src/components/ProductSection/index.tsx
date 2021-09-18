import { ReactNode, useState } from "react";
import { Waypoint } from "react-waypoint";

import { Container } from "./styles";

interface ProductSectionProps {
  imageUrl: string;
  titleText: string;
  subtitleJSX?: ReactNode;
  buttonsJSX?: ReactNode[];
}

export function ProductSection({
  imageUrl,
  titleText,
  subtitleJSX,
  buttonsJSX,
}: ProductSectionProps) {
  const [isNotOnScreen, setIsNotOnScreen] = useState(true);

  return (
    <Container
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div
        className={`titles ${
          isNotOnScreen ? "is-not-on-screen" : "is-on-screen"
        }`}
      >
        <h1>{titleText}</h1>
        {subtitleJSX}
      </div>

      <Waypoint
        onEnter={() => setIsNotOnScreen(false)}
        onLeave={() => setIsNotOnScreen(true)}
      />

      <div
        className={`buttons ${
          isNotOnScreen ? "is-not-on-screen" : "is-on-screen"
        }`}
      >
        {buttonsJSX}
      </div>
    </Container>
  );
}
