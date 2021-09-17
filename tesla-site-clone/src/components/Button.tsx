import { MouseEvent, AnchorHTMLAttributes } from "react";

interface WhiteButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
  route: string;
}

export function Button({ text, route, ...rest }: WhiteButtonProps) {
  function handleClick(
    event: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>
  ) {
    event.preventDefault();

    console.log(route);
  }

  return (
    <a href={route} onClick={handleClick} {...rest}>
      {text}
    </a>
  );
}
