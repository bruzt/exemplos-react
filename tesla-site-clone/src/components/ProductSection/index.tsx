import { ReactNode } from "react";
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
  return (
    <Container
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="titles">
        <h1>{titleText}</h1>
        {subtitleJSX}
      </div>

      <div className="buttons">{buttonsJSX}</div>
    </Container>
  );
}
