import type { NextPage } from "next";

import { Header } from "../components/Header";
import { ProductsWrapper } from "../components/ProductsWrapper";

const Home: NextPage = () => {
  return (
    <>
      <Header />

      <ProductsWrapper />
    </>
  );
};

export default Home;
