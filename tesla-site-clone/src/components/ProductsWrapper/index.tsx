import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import { ProductSection } from "../ProductSection";
import { CarsSubtitle } from "../CarsSubtitle";
import { Button } from "../Button";
import { Container } from "./styles";

export function ProductsWrapper() {
  const [childNodes, setChildNodes] = useState(0);
  const [onTop, setOnTop] = useState(true);

  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (mainRef.current) {
      const main = mainRef.current;

      setChildNodes(main.childNodes.length);

      main.addEventListener("scroll", scrollListener);

      return () => main.removeEventListener("scroll", scrollListener);
    }
  }, []);

  function scrollListener() {
    if (mainRef.current) {
      if (mainRef.current.scrollTop > 100) {
        setOnTop(false);
      } else {
        setOnTop(true);
      }
    }
  }

  return (
    <Container ref={mainRef}>
      <ProductSection
        imageUrl="/tesla-model-s.jpeg"
        titleText="Model S"
        subtitleJSX={<CarsSubtitle route="/model-s/touchless-delivery" />}
        buttonsJSX={[
          <Button
            key="model-s/custom-order"
            text="CUSTOM ORDER"
            route="/model-s/custom-order"
            className="black"
          />,
          <Button
            key="model-s/existing-inventory"
            text="EXISTING INVENTORY"
            route="/model-s/existing-inventory"
            className="white"
          />,
        ]}
      />

      <ProductSection
        imageUrl="/tesla-model-y.jpeg"
        titleText="Model Y"
        subtitleJSX={<CarsSubtitle route="/model-y/touchless-delivery" />}
        buttonsJSX={[
          <Button
            key="model-y/custom-order"
            text="CUSTOM ORDER"
            route="/model-y/custom-order"
            className="black"
          />,
          <Button
            key="model-y/existing-inventory"
            text="EXISTING INVENTORY"
            route="/model-y/existing-inventory"
            className="white"
          />,
        ]}
      />

      <ProductSection
        imageUrl="/tesla-model-3.jpeg"
        titleText="Model 3"
        subtitleJSX={<CarsSubtitle route="/model-3/touchless-delivery" />}
        buttonsJSX={[
          <Button
            key="model-3/custom-order"
            text="CUSTOM ORDER"
            route="/model-3/custom-order"
            className="black"
          />,
          <Button
            key="model-3existing-inventory"
            text="EXISTING INVENTORY"
            route="/model-3/existing-inventory"
            className="white"
          />,
        ]}
      />

      <ProductSection
        imageUrl="/tesla-model-x.jpeg"
        titleText="Model X"
        subtitleJSX={<CarsSubtitle route="/model-x/touchless-delivery" />}
        buttonsJSX={[
          <Button
            key="model-x/custom-order"
            text="CUSTOM ORDER"
            route="/model-x/custom-order"
            className="black"
          />,
          <Button
            key="model-x/existing-inventory"
            text="EXISTING INVENTORY"
            route="/model-x/existing-inventory"
            className="white"
          />,
        ]}
      />

      <ProductSection
        imageUrl="/tesla-solar-panels.jpeg"
        titleText="Solar Panels"
        subtitleJSX={<h2>Lowest Cost Solar Panels in America</h2>}
        buttonsJSX={[
          <Button
            key="solar-panels/order-now"
            text="ORDER NOW"
            route="/solar-panels/order-now"
            className="black"
          />,
          <Button
            key="solar-panels/learn-more"
            text="LEARN MORE"
            route="/solar-panels/learn-more"
            className="white"
          />,
        ]}
      />

      <ProductSection
        imageUrl="/tesla-solar-roof.jpeg"
        titleText="Solar Roof"
        subtitleJSX={<h2>Produce Clean Energy From Your Roof</h2>}
        buttonsJSX={[
          <Button
            key="solar-roof/order-now"
            text="ORDER NOW"
            route="/solar-roof/order-now"
            className="black"
          />,
          <Button
            key="solar-roof/learn-more"
            text="LEARN MORE"
            route="/solar-roof/learn-more"
            className="white"
          />,
        ]}
      />

      <ProductSection
        imageUrl="/tesla-accessories.jpeg"
        titleText="Accessories"
        buttonsJSX={[
          <Button
            key="accessories/shop"
            text="SHOP NOW"
            route="/accessories/shop"
            className="black"
          />,
        ]}
      />

      <div className={`arrow-down ${onTop ? "on-top" : ""}`}>
        <IoIosArrowDown size="3rem" color="#111" />
      </div>
    </Container>
  );
}
